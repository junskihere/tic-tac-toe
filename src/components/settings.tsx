import React from 'react';
import { useBoard } from '../context/board';
import styles from './settings.module.css';

const SettingsComponent = () => {
  const isBot = useBoard().isBot;
  const resetBoard = useBoard().resetBoard;
  const setIsBot = useBoard().setIsBot;

  const handlePlayWithBot = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setIsBot(e.target.checked);
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
      <input type="text" id="name_field" className="nes-input" />
    </div>
    <br />
    {
      !isBot && <div className="nes-field">
        <label htmlFor="name_field">Player 2 name</label>
        <input type="text" id="name_field" className="nes-input" />
      </div>
    }
  </div>
}

export default SettingsComponent;