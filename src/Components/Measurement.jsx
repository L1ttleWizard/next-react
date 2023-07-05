"use client";
import React, { useState,useEffect } from "react";

export const Measurement = (data) => {
  const [mes, setMes] = useState(0);
useEffect(()=>{setMes(data)},[data])
  const block = data.data.map((measure) => (
    <>
      <li
        className=" container d-flex gap-3 px-3 py-2  border-2  w-50  my-2 align-self-center"
        key={measure.id}
        style={{ width: "fit-content" }}
      >
        <div className = "bg-info px-3 rounded-3 d-flex gap-2 py-2">
          <div className="">Time:{measure.date_time}</div>
          <div>Temperature:{measure.temp}</div>
        </div>
      </li>
    </>
  ));

  return (
    <>
      <ul className="d-flex flex-row flex-wrap align-content-center justify-content-around">{block}</ul>
    </>
  );
};
