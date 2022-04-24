import { ReactChild } from "react";

export interface Children {
  children: ReactChild;
}

export interface MyContext {
  board: string[][];
  updateBoard: Function;
  resetBoard: Function;
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