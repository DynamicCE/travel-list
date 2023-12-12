import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
]; // i passed object's properties into an array with {}

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// COMPONENTS

function Logo() {
  return (
    <div>
      <h1> 🧳 Far Away 🏝️ </h1>
    </div>
  );
}

function Form() {
  const [description, setDescripton] = useState("");
  const [choose, setChoose] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" action="" onSubmit={handleSubmit}>
      {" "}
      {/*by using handleSubmit here and not in button, if we write our input and press enter, handleSubmit will also work */}
      what do you need for your trip 🧸
      <select
        name="amount"
        value={choose}
        onChange={(e) => setChoose(e.target.value)}
      >
        {/*We turned every options into map method which Array.from({lenght:20},map((_, i)=>i+1)) takes as 2th element  */}
        {Array.from({ length: 20 }, (unused, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}x
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="what do you need"
        value={description}
        onChange={(e) => setDescripton(e.target.value)}
      />
      <button>add</button>{" "}
      {/* we could use handleSubmit here but it would submit when only  button is clicked */}
    </form>
  );
}

// in packingList, i render a map() on initialItems.For every element of that array,we return <Item/> component which takes that elements as props and render
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((object) => (
          <Item item={object} key={object.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❎</button>
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have x items on your list and you already packed x </em>
    </footer>
  );
}
