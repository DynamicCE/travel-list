const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

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
      what do you need for your trip
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
