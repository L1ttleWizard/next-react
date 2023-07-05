"use client";
import React, { useState,useEffect } from "react";

export const Measurement = (data) => {
  const [mes, setMes] = useState(0);
useEffect(()=>{setMes(data)},[data])
  const block = data.data.map((measure) => (
    <>
      <li
        className=" container d-flex gap-3 px-lg-3 py-2  border-2  my-lg-2 align-self-center"
        key={measure.id}
        style={{ width: "fit-content" }}
      >
        <div className = "bg-info px-lg-3 rounded-3 d-flex flex-md-row flex-column gap-lg-2 py-lg-2">
          <div className="">Time:{measure.date_time}</div>
          <div>Temperature:{measure.temp}</div>
        </div>
      </li>
    </>
  ));

  return (
    <>
      <ul className="d-flex flex-column flex-lg-row flex-lg-wrap align-content-center justify-content-around">{block}</ul>
    </>
  );
};
