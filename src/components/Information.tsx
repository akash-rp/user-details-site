import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import UserDetailsContext from "../contexts/userDetailsContext";
import React from "react";

export default function Information() {
  const { info } = useContext(UserDetailsContext);

  return (
    <Box w={"full"} p={6} bg="#f0eeee" borderRadius={15}>
      <Heading>Information</Heading>
      {info.firstName && (
        <>
          <div>
            <span className={"bold"}>First Name</span>: {info.firstName}
          </div>
          <div>
            <span className={"bold"}>Last Name:</span> {info.lastName}
          </div>
          <div>
            <span className={"bold"}>Email Address:</span> {info.email}
          </div>
          <div>
            <span className={"bold"}>Phone Number:</span> {info.phone}
          </div>
          <div>
            <span className={"bold"}>Date of Birth:</span> {info.dob}
          </div>
          <div>
            <span className={"bold"}>Tech Stack:</span>{" "}
            {info.techStack.join(", ")}
          </div>
        </>
      )}
      {!info.firstName && (
        <Text align={"center"}>No Information Available</Text>
      )}
    </Box>
  );
}
