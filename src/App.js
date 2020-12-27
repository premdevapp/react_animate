import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  modalShowHandler = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  modalClosedHandler = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpen} closed={this.modalClosedHandler} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.modalShowHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
