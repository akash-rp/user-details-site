import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import { UserInfo } from "../models/UserInfoModel";

const UserDetailsContext = createContext({
  info: {} as UserInfo,
  setInfo: {} as Dispatch<SetStateAction<{}>>,
});

export default UserDetailsContext;
