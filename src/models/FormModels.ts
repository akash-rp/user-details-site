import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export type BasicDetailsSectionProps = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string | number;
    }>
  >;
};

export type OtherInformationSectionProps = {
  control: Control<FieldValues, any>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string | number;
    }>
  >;
  register: UseFormRegister<FieldValues>;
};

export type TechStackSectionProps = {
  fields: Record<"id", string>[];
  register: UseFormRegister<FieldValues>;
  removeSkill: (index: number) => void;
  addSkill: () => void;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string | number;
    }>
  >;
};
