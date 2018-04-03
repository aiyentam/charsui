import React, { Component } from "react";
import "../app/App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello!</h1>
        <p>My name is Ai Yen Tam.</p>
        <Footer />
      </div>
    );
  }
}

export default App;
