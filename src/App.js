
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="click me" onClick={() => console.log("clicked")}/>
      </header>
    </div>
  );
}

export default App;
