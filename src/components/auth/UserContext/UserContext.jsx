import React from "react";
import { getLoggedInUser } from "../../../services/authServices";

const UserContext = React.createContext(getLoggedInUser());
export default UserContext;
