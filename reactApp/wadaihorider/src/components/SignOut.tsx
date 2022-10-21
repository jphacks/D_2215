import React from "react";
import { Box, Button } from "@chakra-ui/react"
import { auth } from "../firebase"

export const SignOut = () => {
  return(
    <Box>
      <Button onClick={() => {auth.signOut()}} colorScheme='pink'>Sign out</Button>
    </Box>
  );
}