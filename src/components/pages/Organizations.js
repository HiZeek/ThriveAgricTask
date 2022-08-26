import React from "react";
import { Link } from "react-router-dom";
import SearchBarOrg from "../layout/SearchBarOrg";
import Button from "../UI/Button";
// import Spinner from "../UI/Spinner";
import classes from "./Organization.module.css";

const Repo = () => {
  return (
    <section className={classes.organization}>
      <div className={classes.left}>
        <h1>Organization</h1>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <Link className={classes.link} to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/repo-list">
              <Button>View Repo List</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <SearchBarOrg />
      </div>
    </section>
  );
};

export default Repo;
