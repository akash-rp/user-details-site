import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  FormErrorMessage,
  Box,
  Text,
} from "@chakra-ui/react";
import { TechStackSectionProps } from "../../models/FormModels";

const TechStackSection = ({
  fields,
  register,
  removeSkill,
  addSkill,
  errors,
}: TechStackSectionProps) => (
  <VStack w="100%">
    <HStack alignSelf={"start"} justifyContent={"space-between"} w="full">
      <Text fontWeight={"500"}>Tech Stack</Text>
      <AddIcon onClick={addSkill} />
    </HStack>
    {fields.map((field, index) => (
      <FormControl
        key={field.id}
        isInvalid={Boolean(errors?.techStack?.[index])}
      >
        <InputGroup>
          {index && (
            <InputRightElement
              className="InputRight"
              children={<CloseIcon onClick={() => removeSkill(index)} />}
            />
          )}
          <Input
            key={field.id}
            {...register(`techStack.${index}.value`, { required: true })}
            placeholder="Enter Tech stack"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors?.techStack?.[index] && (
            <Box color="red.500">Tech stack is required</Box>
          )}
        </FormErrorMessage>
      </FormControl>
    ))}
  </VStack>
);

export default TechStackSection;
