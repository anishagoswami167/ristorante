import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import DishDetail from './components/DishDetailComponent' ;
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  render() {
    return (
    <BrowserRouter>
     <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
