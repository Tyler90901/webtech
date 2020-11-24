import React from 'react';
import ReactDOM from 'react-dom';

export class ItemOne extends React.Component {
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

export default ItemOne;
