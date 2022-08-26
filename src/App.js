import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Organizations from "./components/pages/Organizations";
import Repo from "./components/pages/Repo";
import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <div className={classes.App}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/repo-list" element={<Repo />} />
            <Route
              exact
              path="/organization-list"
              element={<Organizations />}
            />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
