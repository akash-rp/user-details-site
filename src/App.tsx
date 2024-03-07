import "./App.css";
import UserDetailsForm from "./components/UserDetailsForm";
import { ChakraProvider, Heading, VStack, extendTheme } from "@chakra-ui/react";
import { UserInfoForm } from "./models/UserInfoModel";
import Input from "./styles/Input";
import Information from "./components/Information";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const theme = extendTheme({
    components: {
      Input,
    },
  });
  const methods = useForm<UserInfoForm>();
  return (
    <ChakraProvider theme={theme}>
      <VStack w={800} m={"auto"} p={4}>
        <Heading>User Details</Heading>
        <FormProvider {...methods}>
          <UserDetailsForm />
          <Information />
        </FormProvider>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
