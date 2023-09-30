import React,{useState} from 'react'
import MyButton from './MyButton';


const Board = ({square,next,onPlay}) => {
    // const [square, setSquare] = useState(Array(9).fill(null));
    // const [next, isNext] = useState(true);
    function handleClick(i) {
      if (square[i] || calculateWinner(square)) return;
  
      const nextSquare = square.slice();
  
      if (next) nextSquare[i] = "X";
      else nextSquare[i] = "O";
      onPlay(nextSquare);
  
  
    
    }
    
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    const  winner =  calculateWinner(square);
    let status;
    if(winner)
    {
      status = "winner :" + winner
    }
    else 
    {
      status =  "Next + : " + (next ? 'X' : 'O');
    }
    return (
      <>
       <div className="status">{status}</div>
        <div className="board-row">
          <MyButton value={square[0]} setSquareClick={() => handleClick(0)} />
          <MyButton value={square[1]} setSquareClick={() => handleClick(1)} />
          <MyButton value={square[2]} setSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <MyButton value={square[3]} setSquareClick={() => handleClick(3)} />
          <MyButton value={square[4]} setSquareClick={() => handleClick(4)} />
          <MyButton value={square[5]} setSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <MyButton value={square[6]} setSquareClick={() => handleClick(6)} />
          <MyButton value={square[7]} setSquareClick={() => handleClick(7)} />
          <MyButton value={square[8]} setSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
}

export default Board