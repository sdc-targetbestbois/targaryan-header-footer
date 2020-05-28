import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from './Footer';

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById("Header"));
  ReactDOM.render(<Footer />, document.getElementById('Footer'));
}


