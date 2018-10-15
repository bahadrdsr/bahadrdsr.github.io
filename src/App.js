import React, { Component } from "react";
import Header from "./components/layout/Header";
import "./styles/main.scss";
import Sidebar from "./components/layout/Sidebar";
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Posts />
        <Sidebar />
      </div>
    );
  }
}

export default App;
