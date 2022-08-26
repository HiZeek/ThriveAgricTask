import React, { useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import Results from "./Results";
import classes from "./SearchBar.module.css";
import Spinner from "../UI/Spinner";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    setLoaded(true);
    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);
      setLoaded(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter GitHub Username"
          value={searchInput}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Get Repo List</Button>
      </div>
      {loaded && <Spinner>Loading...</Spinner>}
      <Results repos={repos} />
    </section>
  );
};

export default SearchBar;
