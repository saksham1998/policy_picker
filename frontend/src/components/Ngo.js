import React from "react";
import {Link} from "react-router-dom";

const Ngo = ({ details ,onSelect}) => {
  const button =
    details.status == false ? (
      <Link to="/getClaim"><button className="ui button blue" onClick={()=>onSelect(details)}>Claim</button></Link>
    ) : <button className="ui button disabled grey">Claimed</button>;

  return (
    <div
      className="ui raised stackable card centered "
      style={{ width: "35vw", backgroundColor: "#EFE8E1" }}
    >
      <div className="content">
        <div className="header">{details.name}</div>
        <div className="description">
          <img
            className="ui small left floated image"
            src={details.logo}
          ></img>
          <p>
            <b>Email</b>: {details.mail}
          </p>
          <p>
            <b>Address</b>: {details.address}
          </p>
          <p>
            <b>IsFunded</b>: {details.recievedFunding.toString()}
          </p>
          {button}
        </div>
      </div>
    </div>
  );
};

export default Ngo;
