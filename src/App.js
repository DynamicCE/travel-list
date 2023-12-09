const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: false },
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
  return <div className="add-form">what do you need for your trip</div>;
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
      <span>
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
