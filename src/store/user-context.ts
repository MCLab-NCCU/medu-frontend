import React from "react";
import { userInfo } from "../datatype/User";

const UserContext = React.createContext({
  userInfo: {} as userInfo,
  setUserInfo: (userInfo: userInfo) => {},
});

export default UserContext;
