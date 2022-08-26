import React, { useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import ResultsOrg from "./ResultsOrg";
import classes from "./SearchBarOrg.module.css";
import Spinner from "../UI/Spinner";

const SearchBarOrg = () => {
  const [searchOrgInput, setSearchOrgInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [orgList, setOrgList] = useState([]);

  const handleChange = (e) => {
    setSearchOrgInput(e.target.value);
  };

  const handleClick = async () => {
    setLoaded(true);
    try {
      const result = await axios(`https://api.github.com/users/${searchOrgInput}/orgs`);

      setOrgList(result);
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
          value={searchOrgInput}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Get Organization List</Button>
      </div>
      {loaded && <Spinner>Loading...</Spinner>}
      <ResultsOrg orgs={orgList} />
    </section>
  );
};

export default SearchBarOrg;
