
import { createContext, useContext, useEffect, useState } from 'react';
import { Children, Coordinates, MyContext } from '../types';


const initialBoard: string[][] = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const initialContext = {
  board: initialBoard,
  winner: '',
  updateBoard: () => { },
  resetBoard: () => { },
  setIsBot: () => { },

};

const BoardContext = createContext(initialContext as MyContext);

export function useBoard () {  return useContext(BoardContext); }

export function BoardProvider({ children }: Children) {
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [lastValue, setLastValue] = useState<string>('x');
  const [winner, setWinner] = useState<string>('');
  const [isBot, setIsBot] = useState<boolean>(false);
  const [isBotsTurn, setIsBotsTurn] = useState<boolean>(false)
  const [lastCoordinate, setLastCoordinate] = useState<Coordinates | null>(null);

  useEffect(() => {
    resetBoard();
  }, [isBot])

  useEffect(() => {
    if (winner !== '') {
      console.log(winner, 'is the winner')
    }
  }, [winner])

  useEffect(() => {
    if (isBot && isBotsTurn) {
      botPlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBotsTurn]);

  const resetBoard = () => {
    setWinner('');
    setLastCoordinate(null);

    setBoard( [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
  }

  const updateBoard = (coordinates: Coordinates) => {

    if (board[coordinates.row][coordinates.col] === '' && winner === '') {
      board[coordinates.row][coordinates.col] = lastValue;
      setBoard([...board]);

      checkWinner(coordinates);

      setLastCoordinate(coordinates);
      if (isBot && isBotsTurn === false) {
        setIsBotsTurn(true)
      }
    };

  }

  // const updateDimension = (newDimension: number) => {
  //   const newBoard: string[][] = [...Array(newDimension)].map(() => {
  //     return [...Array(newDimension)].map(() => '');
  //   })

  //   setBoard([...newBoard])
  // }

  const checkWinner = (coordinates: Coordinates) => {
    if (checker(coordinates, lastValue)) {
      setWinner(lastValue);
    }
    setLastCoordinate(coordinates);
    setLastValue(lastValue === 'x' ? 'o' : 'x');
  }

  const botPlay = () => {
    if (lastCoordinate !== null) {
      const { row, col } = lastCoordinate;
      const oldValue = lastValue === 'x' ? 'o' : 'x';
      let coordinates = null;

      if (checker({ row, col: col + 1 }, oldValue) && board[row][col + 1] === '') {
        coordinates = { row, col: col + 1 };
      } else if (checker({ row, col: col - 1 }, oldValue) && board[row][col - 1] === '') {
        coordinates = { row, col: col - 1 };
      } else if (checker({ row, col: col + 2 }, oldValue) && board[row][col + 2] === '') {
        coordinates = { row, col: col + 2 };
      } else if (checker({ row, col: col - 2 }, oldValue) && board[row][col - 2] === '') {
        coordinates = { row, col: col - 2 };
      }
      if (board[row + 1]) {
        if (checker({ row: row + 1, col }, oldValue) && board[row + 1][col] === '') {
          coordinates = { row: row + 1, col };
        } else if (checker({ row: row + 1, col: col - 1 }, oldValue) && board[row + 1][col - 1] === '') {
          coordinates = { row: row + 1, col: col - 1};
        } else if (checker({ row: row + 1, col: col + 1 }, oldValue) && board[row + 1][col + 1] === '') {
          coordinates = { row: row + 1, col: col + 1};
        } else if (checker({ row: row + 1, col: col + 2 }, oldValue) && board[row + 1][col + 2] === '') {
          coordinates = { row: row + 1, col: col + 2 };
        } else if (checker({ row: row + 1, col: col - 2 }, oldValue) && board[row + 1][col - 2] === '') {
          coordinates = { row: row + 1, col: col - 2};
        }
      }
      if (board[row + 2]) {
        if (checker({ row: row + 2, col }, oldValue) && board[row + 2][col] === '') {
          coordinates = { row: row + 2, col};
        } else if (checker({ row: row + 2, col: col - 1 }, oldValue) && board[row + 2][col - 1] === '') {
          coordinates = { row: row + 2, col: col - 1};
        } else if (checker({ row: row + 2, col: col + 1 }, oldValue) && board[row + 2][col + 1] === '') {
          coordinates = { row: row + 2, col: col + 1};
        } else if (checker({ row: row + 2, col: col + 2 }, oldValue) && board[row + 2][col + 2] === '') {
          coordinates = { row: row + 2, col: col + 2};
        }else if (checker({ row: row + 2, col: col - 2 }, oldValue) && board[row + 2][col - 2] === '') {
          coordinates = { row: row + 2, col: col - 2};
        }
      }
      if (board[row - 1]) {
        if (checker({ row: row - 1, col }, oldValue) && board[row - 1][col] === '') {
          coordinates = { row: row - 1, col };
        } else if (checker({ row: row - 1, col: col - 1 }, oldValue) && board[row - 1][col - 1] === '') {
          coordinates = { row: row - 1, col: col - 1 };
        } else if (checker({ row: row - 1, col: col - 2 }, oldValue) && board[row - 1][col - 2] === '') {
          coordinates = { row: row - 1, col: col - 2 };
        } else if (checker({ row: row - 1, col: col + 1 }, oldValue) && board[row - 1][col + 1] === '') {
          coordinates = { row: row - 1, col: col + 1 };
        } else if (checker({ row: row - 1, col: col + 2 }, oldValue) && board[row - 1][col + 2] === '') {
          coordinates = { row: row - 1, col: col + 2 };
        }
      }
      if (board[row - 2]) {
        if (checker({ row: row - 2, col }, oldValue) && board[row - 2][col] === '') {
          coordinates = { row: row - 2, col};
        } else if (checker({ row: row - 2, col: col - 1 }, oldValue) && board[row - 2][col - 1] === '') {
          coordinates = { row: row - 2, col: col -1};
        } else if (checker({ row: row - 2, col: col + 1 }, oldValue) && board[row - 2][col + 1] === '') {
          coordinates = { row: row - 2, col: col + 1};
        } else if (checker({ row: row - 2, col: col + 2 }, oldValue) && board[row - 2][col + 2] === '') {
          coordinates = { row: row - 2, col: col + 2};
        } else if (checker({ row: row - 2, col: col - 2 }, oldValue) && board[row - 2][col - 2] === '') {
          coordinates = { row: row - 2, col: col - 2};
        }
      }

      if (winner === '') {
        if (coordinates === null) {
          if (lastCoordinate.row === 0 && lastCoordinate.col === 0 && board[row + 1] && board[row + 1][col + 1] === '') {
            coordinates = {row: row+1, col: col + 1};
          } else if (lastCoordinate.row === 2 && lastCoordinate.col === 0 && board[row - 1] && board[row - 1][col + 1] === '') {
            coordinates = {row: row-1, col: col + 1};
          } else if (lastCoordinate.row === 2 && lastCoordinate.col === 2 && board[row - 1][col - 1] === '') {
            coordinates = {row: row - 1, col: col - 1};
          } else if (lastCoordinate.row === 0 && lastCoordinate.col === 2 && board[row + 1][col - 1] === '') { 
            coordinates = {row: row + 1, col: col - 1};
          } else {

            for (let i = 0; i < board.length; i++) {
              const colIndex = board[i].findIndex((col) => col === '');
              if (colIndex > -1) {
                coordinates = {row: i, col: colIndex};
                break;
              }
            }


          }
        
        }

        if (coordinates !== null) {
          board[coordinates.row][coordinates.col] = lastValue;
          checkWinner(coordinates);
        }


      }







      setBoard([...board]);
      setIsBotsTurn(false);

      setLastValue(lastValue === 'x' ? 'o' : 'x');
    }

  }

  const checker = (coordinates: Coordinates, value: string) => {
    const { row, col } = coordinates;
    if (board[row][col - 1] === value && board[row][col + 1] === value) {
      return true;
    }

    //check when input in middle
    if (board[row - 1] && board[row + 1]) {
      if (board[row - 1][col] === value && board[row + 1][col] === value) {
        return true;
      }
      if (board[row - 1][col - 1] === value && board[row + 1][col + 1] === value) {
        return true;
      }
      if (board[row - 1][col + 1] === value && board[row + 1][col - 1] === value) {
        return true;
      }
    }

    // check going up
    if (board[row - 1]) {
      if (board[row - 2]) {
        if (board[row - 1][col] === value && board[row - 2][col] === value) {
          return true;
        }
        if (board[row - 1][col  + 1] === value && board[row - 2][col + 2] === value) {
          return true;
        }
        if (board[row - 1][col  - 1] === value && board[row - 2][col - 2] === value) {
          return true;
        }

      }
    }

    // going down
    if (board[row + 1]) {
      if (board[row + 2]) {
        if (board[row + 1][col] === value && board[row + 2][col] === value) {
          return true;
        }
        if (board[row + 1][col  + 1] === value && board[row + 2][col + 2] === value) {
          return true;
        }
        if (board[row + 1][col  - 1] === value && board[row + 2][col - 2] === value) {
          return true;
        }

      }
    }

    // going right
    if (board[row][col  + 1]) {
      if (board[row][col + 2]) {
        if (board[row][col  + 1] === value && board[row][col + 2] === value) {
          return true;
        }
      }
    }

    // going lef
    if (board[row][col  - 1]) {
      if (board[row][col - 2]) {
        if (board[row][col  - 1] === value && board[row][col - 2] === value) {
          return true;
        }
      }
    }

  }

  return (
      <BoardContext.Provider value={{board, updateBoard, resetBoard, setIsBot, winner}}>
        {children}
      </BoardContext.Provider>
      
  )
}