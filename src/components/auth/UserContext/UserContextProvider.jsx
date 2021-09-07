import React from "react";
import UserContext from "./UserContext";

const UserContextPovider = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextPovider;
