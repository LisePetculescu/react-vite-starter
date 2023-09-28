import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      <Member></Member>
    </>
  );
}

function Member() {
  return <h2>Hej member</h2>;
}

export default App;
