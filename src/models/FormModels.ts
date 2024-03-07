import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { UserInfoForm } from "./UserInfoModel";
import { OptionBase } from "chakra-react-select/dist/types/types";

export type BasicDetailsSectionProps = {
  register: UseFormRegister<UserInfoForm>;
  errors: Partial<FieldErrorsImpl<UserInfoForm>>;
};

export type OtherInformationSectionProps = {
  control: Control<UserInfoForm, any>;
  errors: Partial<FieldErrorsImpl<UserInfoForm>>;
  register: UseFormRegister<UserInfoForm>;
};

export type TechStackSectionProps = {
  fields: Record<"id", string>[];
  register: UseFormRegister<UserInfoForm>;
  removeSkill: (index: number) => void;
  addSkill: () => void;
  errors: Partial<FieldErrorsImpl<UserInfoForm>>;
};

export interface GenderOption extends OptionBase {
  value: string;
  label: string;
}
