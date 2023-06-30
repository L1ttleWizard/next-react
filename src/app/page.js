import React from "react"
import "../styles/styles.scss"
import Table from "@/Components/Table";
import { Measurement } from "@/Components/Measurement";
async function getData() {
  const response = await fetch('https://esp-32-demo-f34e1-default-rtdb.europe-west1.firebasedatabase.app/test_bat.json')
  const data = await response.json();
  setInterval(getData, 2000);

  return data;
}

let datas = await getData();

let listItems = Object.values(datas);
listItems = Array.from(listItems);



export default function Home() {

  return (
    <>
      <h1>home</h1>
      <ul>
        <Table data={listItems} />
        <Measurement data={listItems} />
      </ul>
    </>

  )
}
