import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>what is that</h1>
          <div className='ratpic'>
            <RatPicture />
          </div>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>uwuu skeleton ass</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function RatPicture() {
  return (
      <img
        src="https://i.imgur.com/qMolFuu.jpeg"
        alt="a man in a rat's clothing"
      />
  );
}

export default App;
