export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  dob: string;
  gender: string;
  techStack: string[];
}

export interface UserInfoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  dob: string;
  gender: { value: string };
  techStack: { value: string }[];
}
