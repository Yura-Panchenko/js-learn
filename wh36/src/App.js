import './App.css';
import Voting from './components/Voting/Voting';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Voting></Voting>
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default App;
