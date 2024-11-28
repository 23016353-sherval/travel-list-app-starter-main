import React from "react";
import Item from "./item";

function PackingList({items, togglePacked, handleDeleteItem, handleUpdateItem}) {
    return (
        <div className="list">
        <ul>
            {items.map((item) => (
            <Item 
            key={item.id} 
            item={item} 
            togglePacked={togglePacked} 
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
            />
            ))}
        </ul>
        </div>
    );
}

export default PackingList;