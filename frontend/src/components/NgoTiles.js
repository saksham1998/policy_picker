import React from "react";
import Ngo from "./Ngo";

const NgoTiles = (props) => {
  const ngos = props.ngoList.map((ngo) => <Ngo details={ngo} key={ngo._id} onSelect={props.onSelect}/>);

  return (
    <div>
      {/* <h1 style={{ textAlign: "center", padding: "10px" }}>List of NGO's:</h1> */}
      {ngos}
    </div>
  );
};

export default NgoTiles;
