import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import LayersIcon from "@material-ui/icons/Layers";
import { Link } from "react-router-dom";
import ROLES from "../../constants/roles";

import UserContext from "../../components/auth/UserContext/UserContext";

export const sideBarSettings = [
  {
    id: 0,
    title: "Dashboard",
    redirect: "/home",
    roles: [ROLES.ADMIN, ROLES.CASHIER, ROLES.PHARMACIST],
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    title: "Patients",
    redirect: "/patients",
    roles: [ROLES.ADMIN, ROLES.CASHIER, ROLES.PHARMACIST],
    icon: <PeopleIcon />,
  },
  {
    id: 2,
    title: "Generate Token",
    redirect: "/generateToken",
    roles: [ROLES.ADMIN, ROLES.CASHIER],
    icon: <BarChartIcon />,
  },
  {
    id: 3,
    title: "Medicines",
    redirect: "/medicines",
    roles: [ROLES.ADMIN, ROLES.PHARMACIST],
    icon: <LayersIcon />,
  },
  {
    id: 4,
    title: "Donations",
    redirect: "/donations",
    roles: [ROLES.ADMIN],
    icon: <AttachMoneyRoundedIcon />,
  },
];

export default function Sidebar() {
  const user = useContext(UserContext);
  return (
    <List>
      {sideBarSettings.map((entry) => {
        if (!entry.roles.includes(user["Role"].roleName)) return null;
        return (
          <ListItem button component={Link} to={entry.redirect} key={entry.id}>
            <ListItemIcon>{entry.icon}</ListItemIcon>
            <ListItemText primary={entry.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
