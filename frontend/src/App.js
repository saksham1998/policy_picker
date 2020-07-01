import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Claim from "./components/Claim";
import axios from "axios";
import NgoTiles from "./components/NgoTiles";
import { Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    ngoList: [],
    selected: {},
  };

  loadData = async (name, filter) => {
    const data = await axios.get("http://localhost:3001/ngo/find", {
      params: {
        name,
        filter,
      },
    });
    console.log(data);
    this.setState({ ngoList: data.data.data });
  };

  getSelected = (data) => {
    this.setState({ selected: data });
  };
  changeStatus = async () => {
    let selectedcopy = { ...this.state.selected };
    selectedcopy = { ...selectedcopy, status: true };
    this.setState({ selected: selectedcopy, ngoList: [] });
    await axios.patch(
      `http://127.0.0.1:3001/ngo/update/${this.state.selected._id}`,
      {
        data: this.state.selected,
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h2 className="ui block header">
          <Link to="/" style={{ color: "black" }}>
            LetsEndorse Task
          </Link>
        </h2>
        <Route
          path="/"
          exact
          render={() => <Search loadData={this.loadData} />}
        />
        <Route
          path="/"
          exact
          render={() => (
            <NgoTiles
              ngoList={this.state.ngoList}
              onSelect={this.getSelected}
            />
          )}
        />
        <Route
          path="/getClaim"
          render={() => (
            <Claim
              selected={this.state.selected}
              changeStatus={this.changeStatus}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
