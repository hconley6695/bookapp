import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import FeatureBook from './feature_book';
import Searchbar from './search_bar';



// Google Books API
const API_KEY = "AIzaSyBlnoHh4bTSVPPGKvgkBZj4XqqdQVM-Tv4";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  searchBooks(term) {

  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <FeatureBook />
      </div>
    );
  }
}

export default App;
// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>