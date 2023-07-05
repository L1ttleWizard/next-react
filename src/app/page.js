"use client"
import React from "react"
import "../styles/styles.scss"
import Table from "@/Components/Table";
import { useState } from "react";
import { Measurement } from "@/Components/Measurement";
import Loading from "./loading";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [measures, setMeasures] = useState([]);

  async function getData() {
    const response = await fetch('https://esp-32-demo-f34e1-default-rtdb.europe-west1.firebasedatabase.app/test_bat.json')
    const data = await response.json();
    setLoading(false);
    setMeasures(Array.from(Object.values(data)));
  }
  useState(() => {
    getData();
  });
  return (
    <>
      <h1>home</h1>
      <ul>
        {
          loading ? <Loading /> : <>
            <Table data={measures} />
            <Measurement data={measures} />
          </>
        }

      </ul>
    </>

  )
}
