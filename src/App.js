import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'     //37E-1
import Login from './components/Login/Login'

class App extends Component {

  constructor( props ) {        //36I
    super( props ) 

    this.state = {              //36C

    }

  }

  render() {                    //36F
    return (
      <div className="App">     {/* 36G */}
        <Header/>               {/* 36H */}
        <Login/>
      </div>
    );
  }
}

export default App;                                 //37E-2
