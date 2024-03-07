import { useEffect, useState, useCallback } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import BasicDetailsSection from "./FormSections/BasicDetailsSections";
import OtherInformationSection from "./FormSections/OtherInformationSection";
import TechStackSection from "./FormSections/TechStackSection";
import { UserInfoForm } from "../models/UserInfoModel";

const UserDetailsForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useFormContext<UserInfoForm>();

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

  const onSubmit = async (data: UserInfoForm) => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => resolve(setIsLoading(false)), 3000);
    });
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
