import React from 'react';

class GroceryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries : []
        }
    }
    render(){
        return(
            <button>Add to grocery list</button>
        );
    }
}

export default GroceryList;