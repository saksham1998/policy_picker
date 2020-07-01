import React from "react";
import { withRouter } from "react-router-dom";

const Claim = ({ selected, changeStatus, history }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    changeStatus();
    history.push("/");
  };
  return (
    <div>
      <form className="ui form container">
        <h4 className="ui dividing header">Information</h4>
        <div className="field">
          <label htmlFor="name">Peronsal</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                id="name"
                value={selected != "undefined" ? selected.name : ""}
              />
            </div>
            <div className="field">
              <input
                type="text"
                required
                name="mail"
                placeholder="Email"
                id="mail"
                value={selected != "undefined" ? selected.mail : ""}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="address">Billing Address</label>
          <div className="fields">
            <div className="sixteen wide field">
              <input
                type="text"
                name="address"
                placeholder="Address"
                id="address"
                value={selected != "undefined" ? selected.address : ""}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="createdAt">About NGO</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                required
                name="createdAt"
                placeholder="Founded On"
                id="createdAt"
                value={selected != "undefined" ? selected.registrationDate : ""}
              />
            </div>
          </div>
        </div>
        <img
          src={selected.logo}
          style={{ width: "250px", height: "200px" }}
        ></img>
        <br />
        <button className="ui button blue" type="submit" onClick={clickHandler}>
          Get Claim
        </button>
      </form>
    </div>
  );
};

export default withRouter(Claim);
