//required
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import ReactApexChart from "react-apexcharts";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const Features = () => {
  // const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [series, setSeries] = useState([44, 55, 13, 33]);

  const options: any = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="features">
      <div className="features-top">
        <h1>total revenue</h1>
      </div>
      <div className="features-middle">
        <div className="features-middle-progressbar">
          {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={380}
          />
        </div>
      </div>
      <div className="features-bottom ">
        <div className="features-bottom-down">
          <p>target</p>
          <p>
            <KeyboardArrowDownIcon /> <span> $12.4K</span>
          </p>
        </div>
        <div className="features-bottom-up">
          <p>last week</p>
          <p>
            <KeyboardArrowUpIcon /> <span> $12.4K</span>
          </p>
        </div>
        <div className="features-bottom-down">
          <p>last month</p>
          <p>
            <KeyboardArrowUpIcon /> <span> $12.4K</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function ApexChart() {
//   const [series, setSeries] = useState([44, 55, 41, 17, 15]);
//   const [options, setOptions] = useState({
//     chart: {
//       type: 'donut',
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={series} type="donut" />
//     </div>
//   );
// }

// export default ApexChart;
