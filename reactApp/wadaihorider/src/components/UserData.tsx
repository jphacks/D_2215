import * as React from "react"
import { db, auth } from "../firebase";
import { collection, DocumentData, getDoc, doc, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
    Box,
    Text,
		SimpleGrid,
    Flex,
    Spacer,
    keyframes,
  } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { SignOut, AddTopic, SearchUser } from "../components";

// framer-motion setting from
const animationKeyframes = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1)  }
  75% { transform: scale(0.9)  }
  100% { transform: scale(1)   }
`;

const animation = `${animationKeyframes} 1s ease-in-out infinite`;
// to here


export const UserData = () => {
  const [data, setData] = React.useState<DocumentData>({});
  const [friend, setFriend] = React.useState("");
  const [frnddata, setFrnddata] = React.useState<DocumentData>({});
  const [showIdxTF, setshowIdxTF] = React.useState<boolean[]>([]);
  const user = auth.currentUser;
  let prevFrendName :string = "";

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((snap) => {
          setData({ ...snap.data() });
        });
      }
    });
  }, []);
  
  prevFrendName = friend;
  setTimeout(() => {
    if (prevFrendName === friend) {
      const q = query(collection(db, "users"), where("name", "==", friend));
      const querySnap = async () => {
        return await getDocs(q);
      };
      querySnap().then((docs) => {
        docs.forEach((doc) => {
          setFrnddata(doc.data());
        });
      });
    }
  }, 4000);

  React.useEffect(() => {
    if (data.topics !== undefined) {
      let tempShowIdxTF: boolean[] = [];
      tempShowIdxTF.length = data.topics.length;
      tempShowIdxTF.fill(false);
      const cc = data.topics.concat(frnddata.topics);
      const dup = cc.filter((x:any ,i:number ,self: any) => {
        return self.indexOf(x) !== self.lastIndexOf(x);
      });
      dup.forEach((x: any) => {
        tempShowIdxTF[data.topics.indexOf(x)] = true;
      });
      setshowIdxTF(tempShowIdxTF);
      if (friend === "") {
        tempShowIdxTF.fill(false);
        setshowIdxTF(tempShowIdxTF);
      }
    }
  }, [frnddata.topics, friend]);

  const check = (elm: boolean) => elm === true;
  let flag = showIdxTF.some(check);

  function Tpc(props: any) {
    if (props.isCommonTpc) {
      return (
        <Box bg='red.300' height='60px' borderWidth="2px" borderRadius="lg" as={motion.div}
          animation={animation} key={props.i}>
          <Text fontSize="xl" padding="10px" fontWeight="medium">{props.topic}</Text>
        </Box>
      );
    } else {
      return(
        <Box bg='purple.300' height='60px' borderWidth="2px" borderRadius="lg" key={props.i}>
          <Text fontSize="xl" padding="10px" fontWeight="medium">{props.topic}</Text>
        </Box>
      );
    }
  }
  
  return (
    <>
      <Flex>
        <Text px='4' py='1'>ユーザ名: {user?.displayName}</Text>
        <Spacer />
        <SignOut/>
      </Flex>
      {flag ? <Text textColor="red.400" fontSize="xl" bg="whiteAlpha.300" padding="10px" borderRadius="lg">共通のわだいがみつかりました！</Text> : <></>}
      <Box bg="whiteAlpha.100" padding="20px">
        {data.topics !== undefined ? 
            <SimpleGrid columns={2} spacing={10} width="md">
            {data.topics.map((topic: any, i: number) => (
              <Tpc isCommonTpc={showIdxTF[i]} topic={topic} i={i}/>
            ))}
            </SimpleGrid>
          : <Text fontSize="3xl">Loading ...</Text>
        }
      </Box>
      <AddTopic />
      <SearchUser setFriend={setFriend}/>
    </>
  );
}