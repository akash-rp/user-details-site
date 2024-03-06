import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useMemo } from "react";
import { Controller } from "react-hook-form";
import { OtherInformationSectionProps } from "../../models/FormModels";

const OtherInformationSection = ({
  register,
  control,
  errors,
}: OtherInformationSectionProps) => {
  const genderOptions = useMemo(
    () => [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ],
    []
  );

  return (
    <VStack spacing={4} alignItems="start" marginY={2}>
      <Text as="b" fontSize="2xl">
        Other Information
      </Text>
      <HStack w="full" alignItems="start">
        {/* Gender */}
        <Controller
          control={control}
          name="gender"
          rules={{ required: "Gender is required" }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <FormControl isInvalid={Boolean(error?.message)}>
              <FormLabel>Gender</FormLabel>
              <Select
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                options={genderOptions}
                placeholder="Gender"
                selectedOptionStyle="check"
                isInvalid={Boolean(error?.message)}
              />
              <FormErrorMessage>{error && error.message}</FormErrorMessage>
            </FormControl>
          )}
        />

        {/* Date of Birth */}
        <FormControl isInvalid={Boolean(errors.dob)}>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            placeholder="DD/MM/YYYY"
            {...register("dob", { required: true })}
          />
          <FormErrorMessage>
            {errors.dob && <Box color="red.500">Date of birth is required</Box>}
          </FormErrorMessage>
        </FormControl>
      </HStack>
    </VStack>
  );
};

export default OtherInformationSection;
