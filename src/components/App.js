import React, {useState} from "react";
import Item from './item';

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true },
// ];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  

  

  function handleSubmit(e) {
    e.preventDefault();

    if (description.trim()) {
      // Create a new item
      const newItem = {
        id: Date.now(), // Unique ID
        description: description.trim(), // Use the entire string
        quantity: quantity,
        packed: false,
      };

      handleAddItems(newItem); // Add the new item to the list
      setDescription(""); // Reset description
      setQuantity(1); // Reset quantity
    }
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>   
      </select>
      <input value={description} placeholder="Item..." onChange={(e) => setDescription(e.target.value)}></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList({items, togglePacked}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item 
          key={item.id} item={item} togglePacked={togglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Stats({items}) {

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>You have {items.length} items in the list.  You already packed {packedItems}{" "}({packedPercentage}%).</em>
    </footer>
  );
}

function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item and spread the existing ones
  }

  function togglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form  handleAddItems={handleAddItems} />
      <PackingList items={items} togglePacked={togglePacked}/>
      <Stats items={items} />
    </div>
  );
}

export default App;
