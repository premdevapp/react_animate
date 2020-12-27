import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
//import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
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
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        {/* <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("onEnter");
          }}
          onEntering={() => {
            console.log("onEntering");
          }}
          onEntered={() => {
            console.log("onEntered");
          }}
          onExit={() => {
            console.log("onExit");
          }}
          onExiting={() => {
            console.log("onExiting");
          }}
          onExited={() => {
            console.log("onExited");
          }}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: "100px",
                height: "100px",
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              {" "}
            </div>
          )}
        </Transition> */}
        <CSSTransition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("onEnter");
          }}
          onEntering={() => {
            console.log("onEntering");
          }}
          onEntered={() => {
            console.log("onEntered");
          }}
          onExit={() => {
            console.log("onExit");
          }}
          onExiting={() => {
            console.log("onExiting");
          }}
          onExited={() => {
            console.log("onExited");
          }}
          //classNames="fade-slide"
          classNames={{
            enter: "",
            enterActive: "fade-slide-enter-active",
            exit: "",
            exitActive: "fade-slide-exit-activeal",
            //appear:
            //appearActive:
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
              margin: "auto",
              transition: "opacity 1s ease-out",
            }}
          >
            {" "}
          </div>
        </CSSTransition>
        <br />

        <Modal show={this.state.modalIsOpen} closed={this.modalClosedHandler} />

        {this.state.modalIsOpen && <Backdrop show />}
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
