import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>React Weather App</h1>
        </header>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/yvonnesarah"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Yvonne Adedeji
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/yvonnesarah/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://ya-react-weather-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
