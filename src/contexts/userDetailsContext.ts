import { createContext } from "react";
import { UserInfo } from "../models/UserInfoModel";
import React from "react";

const UserDetailsContext = createContext({
  info: {} as UserInfo,
  setInfo: {} as React.Dispatch<React.SetStateAction<UserInfo>>,
});

export default UserDetailsContext;
