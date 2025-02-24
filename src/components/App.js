import React, {useState} from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";


// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];


function App() {

  const [items, setItems] = useState(initialItems)
  const maxItems = 28;

  function handleAddItems(item) {
    if (items.length >= maxItems) {
      alert(`You can only add up to ${maxItems} items.`);
      return; // Prevent adding more items
    }
    setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item and spread the existing ones
  }

  function togglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  
  function handleUpdateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? {...item, packed: !item.packed}:item
      )
    );
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) =>
    prevItems.filter((item) => item.id !== itemId)
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form  handleAddItems={handleAddItems} />
      <PackingList
      items={items}
      togglePacked={togglePacked}
      handleDeleteItem={handleDeleteItem}
      handleUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
