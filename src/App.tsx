
import styles from  './App.module.css';
import BoardComponent from './components/board';
import SettingsComponent from './components/settings';
import { useBoard } from './context/board';

function App() {
  const winner = useBoard().winner;
  return (
    <div className={styles.App}>
        <header className={styles["App-header"]}>
          <h1>TIC TAC TOE</h1>
        </header>
        <br />
        
        <div className={styles.content}>
          <div>
            <SettingsComponent />
          </div>
          <div>
            <BoardComponent />
          </div>
        </div>
      <div className={styles['git-char']}>
        <i className="nes-octocat animate"></i>
        {
          winner !== '' && <div className="nes-balloon from-left">
            <p>{winner} wins!</p>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
