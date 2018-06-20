import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

//services
import HttpService from '../services/http-services'; //gets http service object from its' js file

const http = new HttpService(); //new httpService object

class App extends Component {
  //built in react constructor, first called when class loads
  constructor(props) {
    super(props);
    this.state = {products:[]};

    //bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this; //reference to this before promise is loaded

    http.getProducts().then(data => { //then fulfills a promise, can't use this unless grab a reference
      //everytime setState is called, component and child components are reloaded, call setstate when want to refresh
      self.setState({products: data});
    }, err => {

    });
  }

  productList = () => {
    //goes through an array and returns to list
    const list = this.state.products.map((product) => //always use .map in react
      //create component for every item in aray form database
      <div className="col-sm-4" key={product._id}>
        <Product product={product}/>
      </div>
    );

    return (list); //rendered list item
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the shop</h1>
        </header>
        <div className="container App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
