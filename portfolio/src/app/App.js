import React, { Component } from "react";
import "../app/App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="hello">Hello!</h1>
        <h2>My name is Ai Yen Tam.</h2>
        <Footer />
      </div>
    );
  }
}

export default App;
