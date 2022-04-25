import { ReactChild } from "react";

export interface Children {
  children: ReactChild;
}

export interface MyContext {
  board: string[][];
  winner: string;
  isBot: boolean;
  players: Player[];
  updateBoard: Function;
  resetBoard: Function;
  setIsBot: Function;
  setPlayers: Function;
}


export interface Coordinates {
  row: number;
  col: number;
}

export interface BoxProps {
  coordinates: Coordinates;
  val: string;
  handlePlayClick: Function;
}

export interface Game {
  id: number;
  players: Player[];
  date: string;
  winner: string[]
}

export interface Player {
  name: string;
  character: string;
}