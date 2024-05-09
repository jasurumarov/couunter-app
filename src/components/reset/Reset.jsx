import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../../context/counterSlice'

const Reset = () => {
  let dispatch = useDispatch()
  return (
    <button className='reset' onClick={() => dispatch(reset())}>Reset</button>
  )
}

export default Reset