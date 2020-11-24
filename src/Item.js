import React from 'react';
import ReactDOM from 'react-dom';

export class Item extends React.Component {
    constructor({name})
    {
     super();
     this.name = name;
	}

    render(){
        return (
            <div>  
                <p> Item is {this.name}</p>
            </div>
		);
    }
}

export default Item;
