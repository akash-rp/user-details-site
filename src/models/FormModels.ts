import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { UserInfoForm } from "./UserInfoModel";

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
