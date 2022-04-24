import { ReactChild } from "react";

export interface Children {
  children: ReactChild;
}

export interface MyContext {
  board: string[][];
  winner: string;
  isBot: boolean;
  players: Player[] | null;
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
  players: Player[];
  date: string;
  winner: Player
}

export interface Player {
  name: string;
}