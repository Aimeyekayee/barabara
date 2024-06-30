"use client"; // don't forget this part if you use app dir to mark the whole
// file as client-side components

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import React from "react";
import { ApexOptions } from "apexcharts";

const ColumnChart = () => {
  const series = [
    {
      name: "OA%",
      data: [75, 81],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar" as const,
      height: 350,
      fontFamily: "",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        distributed: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: undefined,
            },
          ],
        },
      },
    },
    colors: ["#F5A524", "#66AAF9"],
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + "%";
      },
    },
    xaxis: {
      categories: ["Day", "Night"],
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
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          colors: "hsl(var(--nextui-default-800))",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "hsl(var(--nextui-default-200))",
      strokeDashArray: 0,
      position: "back",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={"100%"}
      width={"100%"}
    />
  );
};

export default ColumnChart;
