import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
function Charts() {
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        showAlways: false,
      },
      tooltip: {
        enabled: false,
      },
      x: {
        show: false,
      },
    },
    theme: {
      mode: "light",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={180}
      />
    </>
  );
}

export default Charts;
