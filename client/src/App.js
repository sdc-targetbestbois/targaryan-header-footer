import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      cartNum: 3
    };

    this.getAllItems = this.getAllItems.bind(this);
  }
  
  componentDidMount() {
    //get items on initial render
    this.getAllItems()
  }

  getAllItems() {
    Axios.get('http://localhost:4005/api/items')
    .then((res) => {
      console.log('from Axios GET request: ', res);
      this.setState({
        items: res.data
      });
    })
    .catch((err) => console.log('problem with Axios GET request: ', err));
  }

  render() {
    return (
      <div>
        <Header cartNum={this.state.cartNum}/>
      </div>
    );
  }
}
