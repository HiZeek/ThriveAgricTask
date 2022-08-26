import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../layout/SearchBar";
import Button from "../UI/Button";
import classes from "./Repo.module.css";

const Repo = () => {
  return (
    <section className={classes.repo}>
      <div className={classes.left}>
        <h1>Repo</h1>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <Link className={classes.link} to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/organization-list">
              <Button>View Organization List</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <SearchBar />
      </div>
    </section>
  );
};

export default Repo;
