import { useState } from 'react';
import styles from './box-container.module.css';
import { BoxProps } from '../types';



const BoxComponent = ({coordinates, val, handlePlayClick}: BoxProps) => {

  const [value] = useState<string>(val);

  const handleClick = () => {
    handlePlayClick(coordinates)
  }

  return (
    <div className={`${styles.container} ${styles[value]}`} onClick={handleClick}>{value}</div>
  )
}

export default BoxComponent;