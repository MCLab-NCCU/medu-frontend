import React, { useState } from "react";
import UserContext from "./user-context.ts";
import { userInfo, userProfile } from "../datatype/User";

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({} as userProfile);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
