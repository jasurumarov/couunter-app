import React from 'react'
import { useDispatch } from 'react-redux'
import { inc } from '../../context/counterSlice'

const Increment = () => {
  let dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(inc())}>Increment</button>
  )
}

export default Increment