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
  return <div className="list">list</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have x items on your list andyou already packed x </em>
    </footer>
  );
}
