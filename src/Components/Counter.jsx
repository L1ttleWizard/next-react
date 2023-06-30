"use client";
import React from "react";
import { useState } from "react";
export const Counter = (data)=>{
  
  let [count,setCounter] = useState('a');
  return(
    <div>
      <button onClick= {()=>{setCounter(count+='a')}}>Increment</button>
      <button onClick = {()=>{setCounter(count='a')}}>reset</button>
      <p>Your current value is {count}</p>
    </div>
  )
}