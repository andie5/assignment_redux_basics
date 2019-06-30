import React from 'react';
import { connect } from 'react-redux'
import {addItemToGroceryList } from './actions'

class GroceryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries : [],
            item: ''
        }
    };

    addToList = (event) => {
        event.preventDefault();
        // this.setState({groceries: [...this.state.groceries, this.state.item]})
        this.state.addItemToGroceryList(this.state.item)
        console.log("groceries: ", this.state.groceries)
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
        console.log("event: ", event.target.value)
    }

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.addToList}>
                            <label>Enter grocery item</label><br />
                            <input type="text"
                                placeholder="Enter grocery item"
                                name="groceryitem"
                                value={this.state.item}
                                onChange={this.handleChange}
                            >
                            </input><br />
                            <p></p>
                            <button>Add to List</button>
                        </form>
                        {/* <button>Add to grocery list</button><br /> */}
                    </div>
                    <div className="col">
                        <h3>Grocery List</h3>
                        <ul>
                            {this.state.groceries.map((item) =>
                                <li>{item}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return { groceries: state.groceries };
}

const mapDispatchToProps = { addItemToGroceryList }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

// export default GroceryList;