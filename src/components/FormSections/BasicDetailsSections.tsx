import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { BasicDetailsSectionProps } from "../../models/FormModels";

const BasicDetailsSection = ({
  register,
  errors,
}: BasicDetailsSectionProps) => (
  <VStack spacing={4} alignItems="start">
    <Text as="b" fontSize="2xl">
      Basic Details
    </Text>
    <HStack w="full" alignItems="start">
      {/* First Name */}
      <FormControl isInvalid={Boolean(errors.firstName)}>
        <FormLabel>First Name</FormLabel>
        <Input
          bgColor="white"
          {...register("firstName", {
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
              message: "Name is incorrect",
            },
          })}
          placeholder="Enter First name"
        />
        <FormErrorMessage>
          {errors.firstName && (
            <Box color="red.500">{errors.firstName.message}</Box>
          )}
        </FormErrorMessage>
      </FormControl>

      {/* Last Name */}
      <FormControl isInvalid={Boolean(errors.lastName)}>
        <FormLabel>Last Name</FormLabel>
        <Input
          {...register("lastName", {
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
              message: "Name is incorrect",
            },
          })}
          placeholder="Enter Last name"
        />
        <FormErrorMessage>
          {errors.lastName && (
            <Box color="red.500">{errors.lastName.message}</Box>
          )}
        </FormErrorMessage>
      </FormControl>
    </HStack>
    <HStack w="full" alignItems="start">
      {/* Email */}
      <FormControl isInvalid={Boolean(errors.email)}>
        <FormLabel>Email Address</FormLabel>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email is incorrect",
            },
          })}
          placeholder="Enter Email Address"
        />
        <FormErrorMessage>
          {errors.email && <Box color="red.500">{errors.email.message}</Box>}
        </FormErrorMessage>
      </FormControl>

      {/* Phone Number */}
      <FormControl isInvalid={Boolean(errors.phone)}>
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftAddon>+91</InputLeftAddon>
          <Input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Phone number is incorrect",
              },
            })}
            placeholder="Enter Phone Number"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.phone && <Box color="red.500">{errors.phone.message}</Box>}
        </FormErrorMessage>
      </FormControl>
    </HStack>
  </VStack>
);

export default BasicDetailsSection;
