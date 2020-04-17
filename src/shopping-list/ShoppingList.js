import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(props) {
  //ShoppingList is a ul that returns a list of shopping items
  // shoppingItems was pass from the state in App.js as 'items' into the ShoppingList
  // using jsx I call on 'items' from App.js, I map through the array
  //and I want two variables: item and i(which is the index number given to it from the map array)
  //Then I create two new variables that I want to pass into the ShoppingItem component
  //key which is equal to the index number, so you can add and not confuse React
  //item which is equal to the actual item object from the state in App.js
  //by passing those into ShoppingItem now I can call on them in the ShoppingItem component
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem key={i} item={item} />
      ))}
    </ul>
  );
}
//make this so it doesn't break even if nothing is
//in there, it returns an empty array
ShoppingList.defaultProps = {
  items: []
};
