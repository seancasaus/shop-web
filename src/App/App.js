import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-services'; //gets http service object from its' js file

const http = new HttpService(); //new httpService object

class App extends Component {
  //built in react constructor, first called when class loads
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this); //binded to loaddata 
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => { //then fulfills a promise
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the shop</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
