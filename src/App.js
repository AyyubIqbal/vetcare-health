import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Details from "./Pages/Home/Details/Details/Details";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound"
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
