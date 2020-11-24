import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomePage from './Home';
import AboutPage from './About';
import CatalogPage from './Catalog';

import Item from './Item';

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function App() {
  return (
  <Router>
    <div>  
      <Navbar bg="light" expand="lg">
         <Navbar.Brand>Tyler Wrigley</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link><Link to="/">Home</Link></Nav.Link>
               <Nav.Link><Link to="/catalog">Catalog</Link></Nav.Link>
               <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
    </div>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog"  component={Catalog} />
      <Route path="/about"  component={About} />
      <Route path="/item/:nm" component={ItemPage}/>
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  </Router>
  );
}

// Home Page
const Home = () => (
  <Fragment>
    <HomePage />
  </Fragment>
  );

//Catalog Page
const Catalog = () => (
  <Fragment>
    <h1>Catalog</h1>
    <CatalogPage />
  </Fragment>
);

// About Page
const About = () => {
const history = useHistory();
return (
  <Fragment>
    <h1>About</h1>
    <button onClick={() => history.push('/') } >Go to home</button>
    <AboutPage />
  </Fragment>
  )
  };

    //Item Page
const ItemPage = (
  { match: {
      params: {nm}
    }
  }) => {
  return (
    <div>
      <h1>Item {nm} Page</h1>
    </div>
  )
};