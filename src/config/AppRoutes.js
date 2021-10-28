import React from "react";
import { Redirect, Route } from "react-router-dom";

//Helper
import { getCurrentUser } from "../services/auth.services";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(getCurrentUser()) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default AppRoutes;
