import React, { Component } from "react";
import "./App.css";
import AddItemForm from "./shopping-list/AddItemForm";
import ShoppingList from "./shopping-list/ShoppingList";

class App extends Component {
  state = {
    shoppingItems: [
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };

  //callback props are similar to event handler props
handleDeleteItem = (item) => {
  // console.log('handle delete item called', { item })
  const newItems = this.state.shoppingItems.filter(itm => itm !== item)
  this.setState({
    shoppingItems: newItems
  })
}
// Notice the = (item) => { usage of an arrow function so 
// that we don't encounter the this problem.
handleCheckItem = (item) => {
  // console.log('handle check item called', { item })
  const newItems = this.state.shoppingItems.map(itm => {
    if (itm === item) {
      itm.checked = !itm.checked
    }
    return itm
  })
  this.setState({
    shoppingItems: newItems
  })
}
handleAddItem = (itemName) => {
  // console.log('handle add item', { itemName })
  const newItems = [
    ...this.state.shoppingItems,
    {name: itemName, checked: false}
  ]
  this.setState({
    shoppingItems: newItems
  })
}
  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem} 
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
