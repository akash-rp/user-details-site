import { useState } from "react";
import "./App.css";
import UserDetailsForm from "./components/UserDetailsForm";
import { ChakraProvider, Heading, VStack, extendTheme } from "@chakra-ui/react";
import UserDetailsContext from "./contexts/userDetailsContext";
import { UserInfo } from "./models/UserInfoModel";
import InputStyle from "./styles/Input";

function App() {
  const [info, setInfo] = useState({} as UserInfo);
  const value = { info, setInfo };
  const theme = extendTheme({
    components: {
      InputStyle,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <VStack w={800} m={"auto"} p={4}>
        <Heading>User Details</Heading>
        <UserDetailsContext.Provider value={value}>
          <UserDetailsForm />
        </UserDetailsContext.Provider>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
