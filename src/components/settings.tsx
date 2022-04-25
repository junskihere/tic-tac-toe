import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import { useBoard } from '../context/board';
import { Player } from '../types';
import styles from './settings.module.css';

const SettingsComponent = () => {
  const isBot = useBoard().isBot;
  const setPlayerContext = useBoard().setPlayers;
  const playersContext = useBoard().players;
  const resetBoard = useBoard().resetBoard;
  const setIsBot = useBoard().setIsBot;

  const [players, setPlayers] = useState<Player[]>(playersContext);
  
  useEffect(() => {
    setPlayerContext(players)
  }, [players])

  const handlePlayWithBot = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsBot(e.target.checked);
    if (e.target.checked) {
      players[1].name = '';
      setPlayers([...players]);
    }
  }

  const handleSetPlayer = (e: React.FormEvent<HTMLInputElement>, player: number) => {
    players[player].name = e.currentTarget.value;
    setPlayers([...players]);
  }

  return <div className={styles.container}>
    <div>
      <label>
        <input type="checkbox" className="nes-checkbox" onChange={handlePlayWithBot} />
        <span>Play With bot</span>
      </label>
    </div>
    <div>
      <button type='button' className='nes-btn is-warning' onClick={() => resetBoard()}>Reset Board</button>
    </div>
    <br />
    <div>
      <button type="button" className="nes-btn ">Game History</button>
    </div>
    <br />
    <div className="nes-field">
      <label htmlFor="name_field">Player 1 name</label>
      <input type="text" id="name_field" className="nes-input" defaultValue={players[0].name} onChange={(e) => handleSetPlayer(e, 0)} />
    </div>
    <br />
    {
      !isBot ? <div className="nes-field">
        <label htmlFor="name_field">Player 2 name</label>
        <input type="text" id="name_field" className="nes-input" defaultValue={players[1].name}  onChange={(e) => handleSetPlayer(e, 1)} />
      </div> : <div>Playing with bot.</div>
    }
  </div>
}

export default SettingsComponent;