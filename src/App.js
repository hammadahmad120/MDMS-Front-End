import React, { Component } from "react";
import AppRoutes from "./routes/AppRoutes/AppRoutes";
import UserContextPovider from "./components/auth/UserContext/UserContextProvider";
import { getLoggedInUser } from "./services/authServices";
import { CssBaseline } from "@material-ui/core";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getLoggedInUser(),
    };
  }
  render() {
    return (
      <UserContextPovider user={this.state.user}>
        <CssBaseline />
        <AppRoutes user={this.state.user} />
      </UserContextPovider>
    );
  }
}

export default App;
