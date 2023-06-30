"use client";
import { Chart } from "chart.js/auto";
import React from "react";
import "daterangepicker";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";
// import datas from "@/data/data";
import { useRef, useEffect } from "react";
import moment from "moment";
import _ from "lodash";

let myChart;
export default function Table(data) {
  let datas = data.data;
  const validate = (obj) => {
    //validates object to figure out if it contains both temp and date to avoid chart crash
    let news = new Array();
    obj = removeEmptyElements(obj);
    for (const key in obj) {
      news.push(obj[key]);
    }

    let fill = new Array();
    news.forEach((thing) => {
      if ("date_time" in thing && "temp" in thing) {
        fill.push(thing);
      }
    });
    return fill;
  };
  function removeEmptyElements(obj) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] && typeof obj[key] === "object")
        removeEmptyElements(obj[key]);
      else if (obj[key] === undefined || obj[key] === null || obj[key] === "")
        delete obj[key];
    });
    return obj;
  }
  function convertDate(inputDate) {
    // Разделяем дату на год, месяц и день
    const parts = inputDate.split("/");
    // Создаем новую дату, используя значения в обратном порядке
    const outputDate = new Date(`${parts[1]}/${parts[2]}/${parts[0]}`);
    // Форматируем дату в виде DD/MM/YYYY
    const dd = String(outputDate.getDate()).padStart(2, "0");
    const mm = String(outputDate.getMonth() + 1).padStart(2, "0");
    const yyyy = outputDate.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }
  function formatZeroes(dateString) {
    let [year, month, day] = dateString.split("-");

    if (month < 10) {
      month = "0" + parseInt(month); // преобразуем в число и добавляем 0
    }

    if (day < 10) {
      day = "0" + parseInt(day); // преобразуем в число и добавляем 0
    }

    return `${year}-${month}-${day}`;
  }
  function formatDate(dateString) {
    let [date, time] = dateString.split(" ");

    let [year, month, day] = date.split("-");
    month = month.padStart(2, "0");
    day = day.padStart(2, "0");

    let [hour, minute] = time.split(":");
    hour = hour.padStart(2, "0");
    minute = minute.padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${minute}`;
  }
  const renderChart = (labels, values) => {
    myChart = new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature battery",
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.5,
            data: values,
            hoverBackgroundColor: "rgb(75, 192, 192)",
            hoverBorderColor: "#357878",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Temperature battery",
        },
      },
    });
    return myChart;
  };
  function lastIndexOf(arr, elem) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elem) {
        return i;
      }
    }
  }

  const RtValues = datas;
  let dateTimes = [];
  let temps = [];
  for (const key in RtValues) {
    //push raw data into serarate arrays
    dateTimes.push(RtValues[key].date_time);
    temps.push(RtValues[key].temp);
  }
  dateTimes = dateTimes.map((item) => {
    return formatDate(item);
  });
  let dateTimesMini = dateTimes.map((item) => {
    //replace empty values to nothing
    return formatZeroes(item).slice(0, 10).replace(/\s+/g, "");
  });

  let length = RtValues.length;
  let labels = dateTimes;
  let values = temps;

  // let latestData = document.getElementById('current');
  // latestData.innerHTML = `Последн  ее измерение ${labels[labels.length - 1]} -  ${values[values.length-1]}°C`
  // renderChart(labels, values);
  const ref1 = useRef(null);
  useEffect(() => {
    renderChart(labels, values);
    return () => {
      myChart.destroy();
    };
  }, [labels, values]);

  useEffect(() => {
    $("#range").daterangepicker(
      {
        minYear: 2022,
        timePicker24Hour: true,
        autoApply: true,
        startDate: `${convertDate(
          dateTimes[0].slice(0, 10).replace(/\s+/g, "").replaceAll("-", "/")
        )}`,
        endDate: `${convertDate(
          dateTimes[dateTimes.length - 1]
            .slice(0, 10)
            .replace(/\s+/g, "")
            .replaceAll("-", "/")
        )}`,
      },
      function (start, end, label) {
        let dateRangeStart = start.format("YYYY-MM-DD");
        let dateRangeEnd = end.format("YYYY-MM-DD");
        console.log(dateRangeStart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        labels = dateTimes.slice(
          dateTimesMini.indexOf(dateRangeStart),
          lastIndexOf(dateTimesMini, dateRangeEnd)
        );
        console.log(labels);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        values = temps.slice(
          dateTimesMini.indexOf(dateRangeStart),
          lastIndexOf(dateTimesMini, dateRangeEnd)
        );
        console.log(values);
        myChart.destroy();
        renderChart(labels, values);
        console.log(
          "New date range selected: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD") +
            " (predefined range: " +
            label +
            ")"
        );
      }
    );
    return () => {
      myChart.destroy();
    };
  }, [values, labels, ref1]);

  return (
    <div>
      <div id="">
        <canvas id="chart"></canvas>
      </div>
      <input type="text" name="daterange" id="range" />
    </div>
  );
}
