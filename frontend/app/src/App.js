import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Contexts
import { ApiContext } from "./contexts/apiContext";
import { UserContext } from "./contexts/userContext";

// Global Components
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import ProtectedRoute from "./components/Global/ProtectedRoute/ProtectedRoute";

// Routes
import { Routes, AuthRoutes } from "./Routes";

// Toast Library
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = React.useState();

  return (
    <ApiContext.Provider value="http://localhost:3000">
      <UserContext.Provider value={{user, setUser}}>

        <div className="App bg-gray-200 min-h-screen">
          <Router>
            <Switch>
              {/* Authenticated Route mappings */}
              {AuthRoutes.map(({ path, exact, component }, key) => {
                return (
                  <ProtectedRoute exact={exact} path={path} component={component} key={key} />
                )
              })}

              {/* General Route mappings */}
              {Routes.map(({ path, exact, component }, key) => {
                return (
                  <Route exact={exact} path={path} component={component} key={key} />
                )
              })}

              {/* 404-page */}
              <Route component={NoMatchPage} />
            </Switch>
          </Router>
        </div>

        <ToastContainer
          className="mt-12 lg:mt-24"
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />

      </UserContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
