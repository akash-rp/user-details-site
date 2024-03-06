import { useContext, useEffect, useState, useCallback } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import UserDetailsContext from "../contexts/userDetailsContext";
import BasicDetailsSection from "./FormSections/BasicDetailsSections";
import OtherInformationSection from "./FormSections/OtherInformationSection";
import TechStackSection from "./FormSections/TechStackSection";
import { UserInfoForm } from "../models/UserInfoModel";

const UserDetailsForm = () => {
  const { setInfo } = useContext(UserDetailsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserInfoForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    rules: {
      minLength: 1,
    },
    name: "techStack",
  });

  const addSkillField = useCallback(() => {
    append({ value: "" });
  }, [append]);

  const removeSkillField = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  useEffect(() => {
    append({ value: "" }, { shouldFocus: false });
  }, [append]);

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

  const onSubmit = (data: UserInfoForm) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      const modifiedData = {
        ...data,
        techStack: data.techStack.map((stack) => stack.value),
        dob: formatDate(data.dob),
        gender: data.gender.value,
      };
      setInfo(modifiedData);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Box w="full" p={4} borderRadius={15} bg="#f0eeee">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems={"normal"} w="full">
          {/* Basic Details Section */}
          <BasicDetailsSection register={register} errors={errors} />

          {/* Other Information Section */}
          <OtherInformationSection
            register={register}
            control={control}
            errors={errors}
          />

          {/* Tech Stack Section */}
          <HStack justifyContent="space-between" w="50%">
            <TechStackSection
              fields={fields}
              register={register}
              errors={errors}
              removeSkill={removeSkillField}
              addSkill={addSkillField}
            />
          </HStack>

          <Button
            type="submit"
            colorScheme="teal"
            alignSelf="end"
            isLoading={isLoading}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UserDetailsForm;
