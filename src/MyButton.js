import React from 'react'
import { useState } from 'react'

const MyButton= ({value,setSquareClick}) => {

  return (
    <>
    
    <button className = "square" onClick = {setSquareClick}>{value}</button>
    </>
  )
}

export default MyButton;