import React from "react";
import { Route, Redirect } from "react-router-dom";
import { sideBarSettings } from "../../components/dashboard/Sidebar";

const ProtectedRoute = ({ path, component: Component, user }) => {
  return (
    <Route
      path={path}
      exact
      render={(props) => {
        const isAuthenticated = !!user; // if user authenticated then allow to visit page, otherwise redirect to login
        //console.log("Props",props)
        if (isAuthenticated) {
          const isPermissionedPath = sideBarSettings.filter(
            (entry) =>
              path.startsWith(entry.redirect) &&
              entry.roles.includes(user["Role"].roleName)
          );

          if (isPermissionedPath.length)
            return <Component {...props} user={user} />;
          return <Redirect to='/not-found' />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

export const AuthRoute = ({ path, component: Component, user }) => {
  return (
    <Route
      path={path}
      exact
      render={(props) => {
        const isAuthenticated = !!user; // if already authenticated(logged in) then redirect to home page if try to visit login/signup
        if (isAuthenticated) {
          return <Redirect to='/home' />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
