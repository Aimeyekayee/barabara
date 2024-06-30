// src/ColumnChart.tsx

"use client"; // don't forget this part if you use app dir to mark the whole
// file as client-side components

import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false }) as any;

const TwoLineCompareOAaverage = () => {
  const data_day = [81, 69, 73, 77, 73, 77];
  const data_night = [85, 82, 81, 77, 81, 79];
  const minValue = Math.min(...data_day, ...data_night);
  let trueMinValue;

  if (minValue === 0) {
    trueMinValue = 0;
  } else if (minValue > 0) {
    trueMinValue = minValue - 10 < 0 ? 0 : minValue - 10;
  }

  const series = [
    {
      name: "Day",
      data: data_day,
    },
    {
      name: "Night",
      data: data_night,
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      fontFamily: "",
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#F5A524", "#66AAF9"],
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + "%";
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "OA% Average each day",
      align: "left",
      style: {
        color: "hsl(var(--nextui-default-800))",
      },
    },
    grid: {
      show: true,
      borderColor: "hsl(var(--nextui-default-200))",
      strokeDashArray: 0,
      position: "back",
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: [
        "17 June",
        "18 June",
        "19 June",
        "20 June",
        "21 June",
        "22 June",
      ],
      labels: {
        style: {
          colors: "hsl(var(--nextui-default-800))",
        },
      },
      axisBorder: {
        color: "hsl(var(--nextui-default-200))",
      },
      axisTicks: {
        color: "hsl(var(--nextui-default-200))",
      },
      title: {
        text: "Date",
        style: {
          color: "hsl(var(--nextui-default-800))",
        },
      },
    },
    yaxis: {
      title: {
        text: "OA%",
        style: {
          color: "hsl(var(--nextui-default-800))",
        },
      },
      min: trueMinValue,
      max: 100,
      labels: {
        style: {
          colors: "hsl(var(--nextui-default-800))",
        },
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
      labels: {
        colors: "hsl(var(--nextui-default-800))",
      },
    },
  };

  return (
    <div style={{ width: "70%" }} className="flex justify-center items-center">
      <div style={{ width: "100%", height: "100%" }} className="px-6">
        <Chart
          options={options}
          series={series}
          type="line"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default TwoLineCompareOAaverage;
