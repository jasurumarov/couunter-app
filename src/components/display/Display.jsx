import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  let count = useSelector( state => state.counter.value)
  return (
    <div>{count}</div>
  )
}

export default Display