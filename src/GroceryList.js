import React from 'react';
import { connect } from 'react-redux'
import {addItemToGroceryList, removeItemToGroceryList, updateDescriptionOfItem } from './actions'

class GroceryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // groceries : [],
            // item: '', 
            // description: '',
            id: 0
        }
        this.groceryitem = React.createRef();
        this.description = React.createRef();
        this.updatedDescription = React.createRef();
    };

    createGroceryItem = () => {

    }

    addToList = (event) => {
        // Prevent the page reloading each time this function is called
        event.preventDefault();

        // If we were storing the list in local this.state, do the following
        // this.setState({groceries: [...this.state.groceries, this.state.item]})

        // Temporary until the id is added to redux
        this.setState({id: this.state.id + 1})

        console.log("this.state.id: ", this.state.id)

        // Create an object from each shopping list item
        // Create utility function for the creating new item
        const newItem = {
            id: this.state.id,
            name: this.groceryitem.current.value,
            description: this.description.current.value,
            // category: this.state.category,
            purchased: true
        }
        console.log("this.groceryitem: ", this.groceryitem.current.value)
        console.log("newItem: ", newItem)

        // Redux state
        this.props.addItemToGroceryList(newItem)
    }

    removeItem = (event) => {
         // Prevent the page reloading each time this function is called
        //  event.preventDefault();
         console.log("event.target.value ",event.target.value)
         console.log("event.target ", event.target)

         this.props.removeItemToGroceryList(event.target.value)
    }

    updateItem = (event) => {
        // Prevent the page reloading each time this function is called
       //  event.preventDefault();
        console.log("event.target.value ",event.target.value)
        console.log("event.target ", event.target)

        this.props.updateDescriptionOfItem(event.target.value)
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
                            <input type="text"
                                placeholder="Enter grocery item"
                                name="groceryitem"
                                ref={this.groceryitem}
                            >
                            </input><br />
                            <input type="text"
                                placeholder="Enter description"
                                name="description"
                                ref={this.description}
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
                            {this.props.groceries.map((item) => {

                                   return <li key={item.id}>{item.name}</li>
                                    
                                })
                            }
                        </ul>
                    </div>
                    <div className="col">
                    <h3>Remove an item from grocery list</h3>
                        <select name ="groceryList"
                            onChange={this.removeItem} 
                            >
                            {this.props.groceries.map((item) => {

                                return <option key={item.id} value={item.name}>{item.name}</option>
                             })
                            }
                        </select>
                        {/* <button onSubmit={this.removeItem}>Delete item</button> */}
                    </div>
                    <div className="col">
                        <h3>Update an item from grocery list</h3>
                        <form className="container" onSubmit={this.updateItem}>
                    
                            <select name ="groceryList"
                                // onChange={this.updateItem} 
                                >
                                {this.props.groceries.map((item) => {

                                    return <option key={item.id} value={item.name}>{item.name}</option>
                                })
                                }
                            </select>
                            <input type="text"
                                    placeholder="Enter new description"
                                    name="description"
                                    ref={this.updatedDescription}
                                >
                                </input>
                            <button>Update description</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return { groceries: state.groceries }; // this.props.grocerieslist
}

const mapDispatchToProps = { addItemToGroceryList, removeItemToGroceryList, updateDescriptionOfItem }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

// export default GroceryList;