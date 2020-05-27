import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      cartNum: 0,
      singleItem: []
    };

    // this.getAllItems = this.getAllItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
  }

  componentDidMount() {
    //get items on initial render
    // this.getAllItems();

    document.addEventListener('addToCart', () => {
      this.setState({cartNum: this.state.cartNum + 1})
    })
  }

  // getAllItems() {
  //   Axios.get('http://targaryenstore-env.eba-pcr3t8nd.us-east-2.elasticbeanstalk.com/api/items')
  //   .then((res) => {
  //     console.log('from Axios GET request: ', res);
  //     this.setState({
  //       items: res.data
  //     });
  //   })
  //   .catch((err) => console.log('problem with Axios GET request: ', err));
  // }

  getItemById(id) {
    Axios.get('http://localhost:9002/api/items', {params: {id: id}})
    .then(res => {
      console.log('item from Axios GET reqest', res)
      const singleItem = res.data
      this.setState({singleItem}, () => console.log(this.state.singleItem))
    })
    .catch(err => {
      console.log("could not get item!", err.message)
    })
  }

  render() {
    return (
      <div>
        <Header getItem={this.getItemById} cartNum={this.state.cartNum}/>
      </div>
    );
  }
}
