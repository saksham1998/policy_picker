import React from "react";

const Search = (props) => {
  let name = "";
  let filter = '';

  const submitHandle = (e) => {
    name = name || document.getElementById('ngo').value
    e.preventDefault();
    filter = document.getElementById('filter').value
    props.loadData(name,filter);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={submitHandle}
          className="ui massive icon transparent input search-input"
        >
          <input
            id="ngo"
            type="text"
            placeholder="Enter NGO Name here..."
            onChange={(e) => (name = e.target.value)}
          />
          <i className="search icon"></i>
          <div className="ui form">
            <div
              className="field"
              style={{ position: "relative", left: "-3vw", zIndex: "1" }}
            >
              <select name='filter' id="filter">
                <option value=" " selected>Filter</option>
                <option value="name">Name</option>
                <option value="status">status</option>
                <option value="mail">Mail</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
