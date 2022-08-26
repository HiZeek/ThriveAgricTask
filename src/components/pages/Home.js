import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <h1>Welcome, How can we be of Help?</h1>
      <div>
        <div className={classes.button}>
          <Link to="/repo-list">
            <Button>View Repo List</Button>
          </Link>
          <Link to="/organization-list">
            <Button>View Organization List</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
