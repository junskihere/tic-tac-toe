
import './App.css';
import BoardComponent from './board';
import { useBoard } from './context/board';

function App() {
  const resetBoard = useBoard().resetBoard;

  return (
      <div className="App">
        <header className="App-header">
          tic-tac
        </header>
        <div>
          <button type='button' onClick={() => resetBoard()}>Reset Board</button>
        </div>
        <br />

        <BoardComponent />
        
      </div>
  );
}

export default App;
