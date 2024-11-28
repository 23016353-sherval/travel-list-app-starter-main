import React, {useState} from "react";

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

export default Form;