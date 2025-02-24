import React from "react";

function Item({item, togglePacked, handleDeleteItem, handleUpdateItem}) {
    const itemStyle = {
        textDecoration: item.packed ? "line-through" : "none", // Conditional strikethrough
        color: item.packed ? "#c5ab5c" : "", // Optional: Change text color when packed
        opacity: item.packed ? "50%" : "",
        display: "flex",
        alignItems: "center"
      };
      const buttonStyle = {
        textDecoration: "none", // Ensure no strikethrough on the button
        background: "transparent", // Optional: Make the button transparent if you don't want a background
        border: "none", // Optional: Remove border from button
        cursor: "pointer", // Optional: Add pointer cursor for better UX
        overflow: 'hidden',
        alignitems: 'center',
        margin: '3px',
        textalign: 'center',
      };
      
    return (
      <li>
        <span style={{...itemStyle, display: "flex", alignItems: "center"}}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handleUpdateItem(item.id)} 
            style={{ marginRight: '10px'}}
          />
          <li className={item.packed ? "packed": ""}>
          {item.description} ({item.quantity})
        </li>
        </span>
    
      <button 
      onClick={() => handleDeleteItem(item.id)}
      style={buttonStyle}
      >
      ❌
      </button>
      </li>
    );
  }

export default Item;