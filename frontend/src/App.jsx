import React from "react";
import "./index.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";

import Home from "./views/home";
import About from "./views/about";
import Login from "./views/login";
import Register from "./views/register";
import Detection from "./views/detection";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/detection">
            <Detection />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />

        {/*<AuthProvider>
          <Navbar />
          <PrivateRoute component={Detection} path="/detection" exact />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Home} path="/home" />
          <Route component={About} path="/about" />
          <Footer />
        </AuthProvider>*/}
      </div>
    </Router>
  );
}

export default App;
