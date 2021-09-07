import { Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Dashboard from "./Dashboard";

export default ({ children, ...rest }) => {
  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
  }));
  const classes = useStyles();
  return (
    <Dashboard {...rest}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </Dashboard>
  );
};
