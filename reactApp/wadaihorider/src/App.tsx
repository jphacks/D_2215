import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";



function App () {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const postData = collection(db, "favorites");
    getDocs(postData).then((snap) => {
      console.log(snap);
    });
  }, []);

  return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="2xl">src/App.tsx</Code> and save to reload.
              </Text>
              <Link
                color="teal.300"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }

export default App;