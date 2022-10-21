import React from "react"
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button, Box } from "@chakra-ui/react"


export const SearchUser = (props: any) => {
  const [input, setInput] = React.useState('');
  const handleInputChange = (e: any) => {
    props.setFriend(e.target.value);
    setInput(e.target.value);
  }
  const isError = input === ''

  return(
    <Box>
      <FormControl isInvalid={isError} width="2l">
        <FormLabel>わだいマッチング</FormLabel>
        <Input type='text' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            友達の名前をいれるとわだいをマッチングします
          </FormHelperText>
        ) : (
          <FormErrorMessage>友達の名前をいれてね</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
}