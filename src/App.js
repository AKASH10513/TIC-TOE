import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import { useState } from "react";

function App() {
   
   const [history,setHistory] =  useState([Array(9).fill(null)]);
   const [currentMove, setCurrentMove]=  useState(0);
   const currentSquares  =   history[currentMove];
   const xIsNext = currentMove % 2 === 0;
  function handlePlay(nextSquare)
  {
    console.log("prevous one :");
  console.log(history);
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
  console.log(nextHistory)
  setHistory(nextHistory);
    
    setCurrentMove(nextHistory.length - 1);
  }  
  function jumpTo(nextMove)
  {
    
    setCurrentMove(nextMove);
  }
  const moves = history.map((square,move)=>{
   let description;
   if(move >  0)
   {
    description =  'Go to move #' + move;
   }
   else{
    description = 'Go to game start';
   }
   return (<li key = {move}>
    <button onClick ={()=>jumpTo(move)} >{description}</button>
   </li>)
  })  ;
  return (
    <>
    <div className="game">
      <div className="game-Board">
        <Board next = {xIsNext} square =  {currentSquares} onPlay = {handlePlay} ></Board>
      </div>
      <div className="game-info">{moves}</div>
    </div>
    </>
  );
}

export default App;
