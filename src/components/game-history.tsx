import { useEffect, useState } from 'react';
import { Game } from '../types';

import styles from './game-history.module.css';

const GamesHistoryComponent = ({setShowGameHistory} : { setShowGameHistory: Function}) => {

  const [gamesHistory, setGamesHistory] = useState<Game[]>([]);

  useEffect(() => {
    // get all localstorage stored games
    const games : any = { ...localStorage };

    const arrayGames = Object.keys(games).map((key) => JSON.parse(games[key]));
    setGamesHistory([...arrayGames])

  }, [])

  return <div className={styles.container}>
    <div className={styles.content}>
      <div>Game History</div>
        <div className={`nes-table-responsive ${styles['table-container']}`}>
          <table className="nes-table is-bordered">
            <thead>
              <tr>
                <th>PLAYER</th>
                <th>SCORE POINTS</th>
                <th>WINNER</th>
              </tr>
            </thead>
            <tbody className={styles['table-body']}>
              {
                gamesHistory.map((game) => {
                  const countX = game.winner.filter((val) => val === 'x').length;
                  const countO = game.winner.filter((val) => val === 'o').length;
                  const xIndex = game.players.findIndex((val) => val.character === 'x');
                  const oIndex = game.players.findIndex((val) => val.character === 'o');
                  return <tr key={game.id}>
                      <td>{game.players[0].name}-({game.players[0].character}) vs {game.players[1].name ? `${game.players[1].name}-(${game.players[1].character})` : 'bot'}</td>
                      <td>X=({countX}) - O=({countO})</td>
                      <td>
                        {
                          countX > countO ? game.players[xIndex].name || 'bot' : game.players[oIndex].name || 'bot'
                        }
                      </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      <div className={styles['button-container']}>
        <button type="button" className="nes-btn is-success" onClick={() => setShowGameHistory(false)}>Close</button>
      </div>
    </div>
  </div>
}

export default GamesHistoryComponent;