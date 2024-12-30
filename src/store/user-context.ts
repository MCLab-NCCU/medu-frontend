import React from "react";
import { userProfile } from "../datatype/User";

const UserContext = React.createContext({
  userInfo: {} as userProfile,
  setUserInfo: (userInfo: userProfile) => {},
});

export default UserContext;
