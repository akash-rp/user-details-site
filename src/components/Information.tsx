import { Box, Heading, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { UserInfoForm } from "../models/UserInfoModel";
import { useEffect, useState } from "react";

const Information = () => {
  const {
    getValues,
    formState: { isSubmitSuccessful, isSubmitting, isValid, isDirty },
  } = useFormContext<UserInfoForm>();

  const [userInfo, setUserInfo] = useState<UserInfoForm>({} as UserInfoForm);

  useEffect(() => {
    if (!isSubmitting && isValid) {
      setUserInfo(getValues());
    }
  }, [isSubmitting, getValues, isValid]);

  return (
    <Box w={"full"} p={6} bg="#f0eeee" borderRadius={15}>
      <Heading>Information</Heading>
      {userInfo.firstName && !isSubmitting && (
        <>
          <div>
            <span className={"bold"}>First Name</span>: {userInfo.firstName}
          </div>
          <div>
            <span className={"bold"}>Last Name:</span> {userInfo.lastName}
          </div>
          <div>
            <span className={"bold"}>Email Address:</span> {userInfo.email}
          </div>
          <div>
            <span className={"bold"}>Phone Number:</span> {userInfo.phone}
          </div>
          <div>
            <span className={"bold"}>Gender:</span> {userInfo?.gender?.value}
          </div>
          <div>
            <span className={"bold"}>Date of Birth:</span>{" "}
            {formatDate(userInfo.dob)}
          </div>
          <div>
            <span className={"bold"}>Tech Stack:</span>{" "}
            {userInfo.techStack.map((ele) => ele.value).join(", ")}
          </div>
        </>
      )}
      {!isSubmitSuccessful && !isDirty && (
        <Text align={"center"}>No Information Available</Text>
      )}
      {isSubmitting && <Text align={"center"}>Loading</Text>}
    </Box>
  );
};

const formatDate = (inputDate: string) => {
  const dateParts = inputDate.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthAbbreviation = months[parseInt(month) - 1];

  // Format the date as dd-mmm-yyyy
  const formattedDate = `${day}-${monthAbbreviation}-${year}`;

  return formattedDate;
};

export default Information;
