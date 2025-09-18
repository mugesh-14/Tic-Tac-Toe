import React from 'react'
import './ticTacToe.css'
// import circle from '../assert/circle.jpg'
// import cross from '../asset/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe <span>React</span></h1>
        <div className="board">

        </div>
        <button className="reset">Reset</button> 
    </div>
  )
}

export default TicTacToe