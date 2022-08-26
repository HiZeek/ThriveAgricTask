import React from "react";

const ResultsOrg = (props) => {
  const { orgs } = props;
  console.log("Organization is: ", orgs.data);

  const listorgs =
    orgs.length !== 0 ? (
      orgs.data.map((item) => <li key={item.id}>{item.login}</li>)
    ) : (
      <li>No Organizations found</li>
    );

  return (
    <div>
      <ul>{listorgs}</ul>
    </div>
  );
};

export default ResultsOrg;
