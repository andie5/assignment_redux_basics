import React from 'react';
import { connect } from 'react-redux'
import {addItemToGroceryList } from './actions'

class GroceryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // groceries : [],
            item: '', 
            description: '',
            id: 0
        }
    };

    addToList = (event) => {
        // Prevent the page reloading each time this function is called
        event.preventDefault();

        // If we were storing the list in local this.state, do the following
        // this.setState({groceries: [...this.state.groceries, this.state.item]})

        // Create and object from each shopping list item
        const newItem = {
            id: this.state.id,
            item: this.state.item,
            description: this.state.description,
            category: this.state.category,
            purchased: true
        }
        console.log("newItem: ", newItem)


        this.setState({id: this.state.id + 1})

        // Redux state
        // this.props.addItemToGroceryList(this.state.item)
        this.props.addItemToGroceryList(newItem)
        // console.log("groceries: ", this.state.groceries)
    }

    // Captures the input change
    handleChange = (event) => {
        this.setState({item: event.target.value})
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleDropdownChange = (event) => {
        this.setState({category: event.target.value})
    }

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className="container" onSubmit={this.addToList}>
                            <h1>
                                Add A Grocery
                            </h1>
                            {/* <label>Enter grocery item</label><br /> */}
                            <input type="text"
                                placeholder="Enter grocery item"
                                name="groceryitem"
                                value={this.state.item}
                                onChange={this.handleChange}
                            >
                            </input><br />
                            <input type="text"
                                placeholder="Enter description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            >
                            </input>
                            <br />
                            <select name ="category" 
                            onChange={this.handleDropdownChange}
                            >
                                <option value = "Food & Drink" defaultValue>Food & Drink</option>
                                <option value = "Clothing">Clothing</option>
                                <option value = "Toiletories">Toiletories</option>
                            </select>

                            <p></p>
                            <button>Add to List</button>
                        </form>
                    </div>
                    <div className="col">
                        <h3>Grocery List</h3>
                        <ul>
                            {this.props.grocerieslist.map((item) => {

                                   return <li key={item.id}>{item.name}</li>
                                    
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return { grocerieslist: state.groceries }; // this.props.grocerieslist
}

const mapDispatchToProps = { addItemToGroceryList }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

// export default GroceryList;