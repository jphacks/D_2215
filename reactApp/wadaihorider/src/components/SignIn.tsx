import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { signInWithRedirect } from "firebase/auth"
import { auth, provider } from "../firebase"

export const SignIn = () => {
	function signInWithGoogle() {
		signInWithRedirect(auth, provider);
	}
	return (
		<Box>
			<Button onClick={() => signInWithGoogle()} colorScheme='purple'>Sign in</Button>
		</Box>
	);
}