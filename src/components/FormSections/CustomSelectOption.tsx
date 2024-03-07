import { CheckIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { HStack, Box } from "@chakra-ui/react";
import {
  SelectComponentsConfig,
  GroupBase,
  chakraComponents,
  ChakraStylesConfig,
} from "chakra-react-select";
import { GenderOption } from "../../models/FormModels";

const SelectOptionStyling: SelectComponentsConfig<
  GenderOption,
  false,
  GroupBase<GenderOption>
> = {
  Option: ({ children, ...props }) => {
    console.log(props);
    return (
      <chakraComponents.Option {...props}>
        <HStack justifyContent={"space-between"} w={"full"}>
          <Box color={"black"}>{children}</Box>
          {props.isSelected && <CheckIcon w={4} h={4} color="green.500" />}
        </HStack>
      </chakraComponents.Option>
    );
  },
  DropdownIndicator: (props) => (
    <chakraComponents.DropdownIndicator {...props}>
      <TriangleDownIcon w={4} h={4} />
    </chakraComponents.DropdownIndicator>
  ),
};

export const chakraStyles: ChakraStylesConfig<
  GenderOption,
  false,
  GroupBase<GenderOption>
> = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    background: "white",
  }),
};

export default SelectOptionStyling;
