import React from 'react'
import { useDispatch } from 'react-redux'
import { dec } from '../../context/counterSlice'

const Decrement = () => {
  let dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(dec())}>Decrement</button>
  )
}

export default Decrement