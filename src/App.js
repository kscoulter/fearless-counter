
import './App.css';
import Button from './components/Button';
import CountDisplay from './components/CountDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDisplay count="1" />
        <Button text="click me" onClick={() => console.log("clicked")}/>
      </header>
    </div>
  );
}

export default App;
