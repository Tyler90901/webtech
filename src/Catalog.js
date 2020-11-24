import './Catalog.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Item from './Item';
import Item1 from './ItemOne';
import Item2 from './ItemTwo';
import Item3 from './ItemThree';

import Routes from './info-json';

function Catalog() {
  return (
    <div className="Catalog">
        {Routes.map((route, index) => {
            return <p key={index}><Link to={`/item/${route.id}`}> {route.name} </Link></p>
        })}
    </div>
  );
}

export default Catalog;
