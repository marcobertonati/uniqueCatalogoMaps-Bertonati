import React from "react";
import Item from "./Item";
import './ItemList.css'

export default function ItemList({ item }) {
  return (
    <div className="itemList">

      {
      
      item.map((singleItem) => (

        <Item title={singleItem.title} key={singleItem.id} />

      ))}
      
    </div>
  );
}
