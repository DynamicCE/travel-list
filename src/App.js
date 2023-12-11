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
  return (
    <form className="add-form" action="">
      what do you need for your trip 🧸
      <select name="amount" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="text" placeholder="what do you need" />
      <button>add</button>
    </form>
  );
}

// in packingList, i render a map() on initialItems.For every element of that array,we return <Item/> component which takes that elements as props and render
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((object) => (
          <Item item={object} />
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
