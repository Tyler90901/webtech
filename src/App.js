import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomePage from './Home';
import AboutPage from './About';
import CatalogPage from './Catalog';
import items from './info-json';

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
      <Route path="/item/:id" component={ItemPage}/>
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

  const itemLookup = (id) => {
    const item = items.filter(obj => obj.id === id);
    console.log(item)
    if(item[0]) {
      return item[0];
    } else {
      return {id: '-1', address: 'no address found'};
    }
  }

//Item Page
const ItemPage = ({ match: {params: {id}}}) => {

  const good = () => {
    return (
      (<div>
        <h1>{itemLookup(id).name} Page hello!</h1>
        <p>{itemLookup(id).address}</p>
      </div>)
    );
  }

  const bad = () => {
    return (
      <h1>no resource found</h1> 
    );
  }

  return (
    <div>
      {itemLookup(id).id === '-1' ? bad() : good()}
    </div>
    );
};