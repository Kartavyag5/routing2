import React from "react";
import { selectCount,setCount } from "../features/sagaExSlice";
import { useDispatch, useSelector } from "react-redux";

const SagaEx = ()=>{
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return(
    <div>
    <h1>count: {count} </h1>
    <button onClick={dispatch(setCount(count))}>Increment</button>
    </div>
  );
}

export default SagaEx;