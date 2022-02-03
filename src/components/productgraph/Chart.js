import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
function Charts(props) {
  console.log("productdetail=>",props)
  let first
if(props.productdetail === "productdetail"){
  first = {
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
    },
    stroke: { width: 1 },
    colors: ["#1E22AA"],
    dataLabels: {
      enabled: true,
    },
    labels: {
      show: true,
    },
    yaxis: {
      show: true,
    },
    xaxis: {
      labels: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  }
}else if(props.productdetail === "products"){
  first = {
    chart: {
      id: "apexchart-example",
      foreColor: "red",
      toolbar: {
        show: false,
      },
    },
    stroke: { width: 1 },
    colors: ["#1E22AA"],
    dataLabels: {
      enabled: false,
    },
    labels: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  }
}
  const [options, setOptions] = useState({
    ...first
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [
        105, 200, 135, 318, 520, 272, 628, 830, 470, 735, 510, 949, 1060, 1500,
        1691, 2125,
      ],
    },
  ]);
  return (
    <>
    {props.productdetail === "productdetail" ?   <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
      /> :   <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={180}
    />}
    
    </>
  );
}

export default Charts