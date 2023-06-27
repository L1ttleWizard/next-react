import React from "react";

export const Measurement = (data) => {

const block = data.data.map(measure=>
<>
    <li className=" container d-flex gap-3 px-3 py-2" key={measure.id}>
        <div className="">Time:{measure.date_time}</div>
        <div>Temperature:{measure.temp}</div>
    </li>
</>);

return (block);
};
