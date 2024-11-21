function Item({item, togglePacked}) {
    const itemStyle = {
        textDecoration: item.packed ? "line-through" : "none", // Conditional strikethrough
        color: item.packed ? "#c5ab5c" : "", // Optional: Change text color when packed
        opacity: item.packed ? "50%" : "",
      };

    return (
      <li style={itemStyle}>
        - {item.description} ({item.quantity}) <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      </li>
      </li>
    );
  }
  

export default Item;