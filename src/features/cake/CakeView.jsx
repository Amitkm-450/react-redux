import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restocked, ordered } from './cakeSlice';

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of Cakes - {noOfCakes}</h1>
        <button onClick={() => dispatch(ordered())}>order cake</button>
        <button onClick={() => dispatch(restocked(3))}>restock cake</button>
    </div>
  )
}

export default CakeView