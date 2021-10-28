import { BrowserRouter as Router, Switch } from "react-router-dom";

//useContext state
import { AuthProvider } from "./context";

//Routes Import
import routes from "./config/routes";
import AppRoutes from "./config/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <AppRoutes
              exact
              key={index}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
