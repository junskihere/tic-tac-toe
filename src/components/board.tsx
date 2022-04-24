import BoxComponent from "./box-container"
import { useBoard } from "../context/board";
import { Coordinates } from "../types";

import './board.css';

const BoardComponent = () => {
  const board = useBoard().board;
  const updateBoard = useBoard().updateBoard;
  // const row = 3;
  // const column = 3;

  const handlePlayClick = (coordinates: Coordinates) => {
    updateBoard(coordinates)
  }

  return (
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered is-dark ">
          <tbody>
            {
              board.map((row, rowIndex) => {
                return <tr key={Math.random()}>
                  {
                    row.map((col, colIndex) => {
                      const coordinates = {row: rowIndex, col: colIndex}
                      return <td key={Math.random()}>
                        <BoxComponent
                        coordinates={coordinates}
                        val={col}
                        handlePlayClick={handlePlayClick}
                      />
                      </td>
                    })
                  }
                </tr>
              })
           }
          </tbody>
        </table>
      </div>
  )

}

export default BoardComponent; 