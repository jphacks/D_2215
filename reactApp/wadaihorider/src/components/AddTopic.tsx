import React, { useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Box, MenuGroup } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons";
import { db, auth} from "../firebase"
import { collection, DocumentData, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


type TOPIC = {
  title: string;
  topic: string;
}
 
export const AddTopic = () => {
  const [topics, setTopics] = React.useState<TOPIC[]>([]);
  const [data, setData] = React.useState<DocumentData>({});

  React.useEffect(() => {
    getDocs(collection(db, "topics")).then((snap) => {
      let Topics: TOPIC[] = [];
      //setTopics(snap.docs.map((doc) => ({ ...doc.data() })));
      snap.docs.forEach((doc) => {
        const document = doc.data();
        Topics.push({
          title: document.title,
          topic: doc.id,
        });
      });
      //ここでsetTopicsしないとhooksの範囲に入らない?
      setTopics(Topics);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((snap) => {
          setData({ ...snap.data() });
        });
      }
    })
  }, []);

  
  function handleOnClick(topic: string) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (data.topics !== undefined) {
          data.topics.push(topic);
          setDoc(doc(db, "users", user.uid), {
            topics: data.topics,
            name: user.displayName,
          });
        } else {
          setDoc(doc(db, "users", user.uid), {
            topics: [],
            name: user.displayName,
          });
        }
        getDoc(doc(db, "users", user.uid)).then((snap) => {
          setData({ ...snap.data() });
        });
      }
    })
    setTimeout(() => window.location.reload(), 300);
  }

  return (
    <Box>
      <Menu>
        <MenuButton    
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='2px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.500' }}
          _focus={{ boxShadow: 'outline' }}
        >
        わだいを追加 <ChevronDownIcon/>
        </MenuButton>
        <MenuList>
          {topics.map((topic, i) => (
            <MenuItem onClick={() => {handleOnClick(topic.topic)}} key={i}>{topic.topic}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

/**
 *         {topics.map((topic, i) => (
            <MenuGroup title={topic.topic} textAlign="left">
              <MenuItem>{topic.title}</MenuItem>
            </MenuGroup>
          ))}
 */