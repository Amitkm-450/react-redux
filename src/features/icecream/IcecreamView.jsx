import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
const IcecreamView = () => {
  const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of Icecreams - {noOfIcecreams}</h1>
        <button onClick={() => dispatch(ordered())}>order icecreams</button>
        <button onClick={() => dispatch(restocked(2))}>restock icecreams</button>
    </div>
  )
}

export default IcecreamView