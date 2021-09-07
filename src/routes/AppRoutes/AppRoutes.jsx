import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute, { AuthRoute } from "../ProtectedRoute/ProtectedRoute";
import Spinner from "../../components/shared/Spinner/Spinner";
// import SignIn from "../../containers/auth/Login/Login";
const Login = lazy(() => import("../../containers/auth/Login/Login"));
const Projects = lazy(() => import("../../containers/Projects/Projects"));
const Homepage = lazy(() => import("../../containers/Homepage/Homepage"));
const Medicines = lazy(() => import("../../containers/Medicines/Medicines"));
const Donations = lazy(() => import("../../containers/donations/Donations"));

const NotFoundPage = lazy(() =>
  import("../../containers/NotFoundPage/NotFoundPage")
);
const PrivacyPolicy = lazy(() =>
  import("../../components/static/PrivacyPolicy/PrivacyPolicy")
);
const TermsOfService = lazy(() =>
  import("../../components/static/TermsOfService/TermsOfService")
);

const AppRoutes = ({ user }) => {
  return (
    <Suspense fallback={<Spinner isCenter={true} />}>
      <Switch>
        <AuthRoute path='/login' exact component={Login} user={user} />

        <ProtectedRoute path='/projects' component={Projects} user={user} />
        <ProtectedRoute path='/home' component={Homepage} user={user} />
        <ProtectedRoute
          path='/donations'
          exact
          component={Donations}
          user={user}
        />
        <ProtectedRoute path='/home' exact component={Homepage} user={user} />
        <ProtectedRoute
          path='/medicines'
          exact
          component={Medicines}
          user={user}
        />

        <Route path='/privacy-policy' exact component={PrivacyPolicy} />
        <Route path='/terms-of-service' exact component={TermsOfService} />
        <Route path='/not-found' component={NotFoundPage} />
        <Redirect from='/' to='/login' exact />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
