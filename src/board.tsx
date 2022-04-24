import BoxComponent from "./box-container"
import { useBoard } from "./context/board";
import { Coordinates } from "./types";

const BoardComponent = () => {
  const board = useBoard().board;
  const updateBoard = useBoard().updateBoard;
  // const row = 3;
  // const column = 3;

  const handlePlayClick = (coordinates: Coordinates) => {
    updateBoard(coordinates)
  }

  return (
    <>
      {
        board.map((row, rowIndex) => {
          return <div key={Math.random()}>
            {
              row.map((col, colIndex) => {
                const coordinates = {row: rowIndex, col: colIndex}
                return <BoxComponent
                  key={Math.random()}
                  coordinates={coordinates}
                  val={col}
                  handlePlayClick={handlePlayClick}
                />
              })
            }
          </div>
        })
      }
    </>
  )

}

export default BoardComponent; 