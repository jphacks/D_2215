import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  HTMLChakraProps,
  chakra,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { UserData, SignIn} from "./components"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"
 
const GradientText: React.FC<HTMLChakraProps<"span">> = (chakraProps) => (
  <chakra.span
    background="linear-gradient(90deg, #4d62d0, #d152c9 40%, #e6b357)"
    backgroundClip="text"
    fontWeight="bold"
    {...chakraProps}
  />
);

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="30vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <GradientText fontSize="3xl" >わだいほりだー</GradientText>
            {user ? <UserData/> : <SignIn />}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}




  /*
                <Link
                color="teal.600"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
  */