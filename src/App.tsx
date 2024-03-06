import { useState } from "react";
import "./App.css";
import UserDetailsForm from "./components/UserDetailsForm";
import { ChakraProvider, Heading, VStack, extendTheme } from "@chakra-ui/react";
import UserDetailsContext from "./contexts/userDetailsContext";
import { UserInfo } from "./models/UserInfoModel";
import Input from "./styles/Input";
import React from "react";
import Information from "./components/Information";

function App() {
  const [info, setInfo] = useState({} as UserInfo);
  const value = { info, setInfo };
  const theme = extendTheme({
    components: {
      Input,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <VStack w={800} m={"auto"} p={4}>
        <Heading>User Details</Heading>
        <UserDetailsContext.Provider value={value}>
          <UserDetailsForm />
          <Information />
        </UserDetailsContext.Provider>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
