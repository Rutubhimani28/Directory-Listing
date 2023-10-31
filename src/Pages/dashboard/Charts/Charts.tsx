import Chart from "react-apexcharts";

type chartProps = {
  height: number;
};
const Charts = ({ height }: chartProps) => {
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
  ];
  return (
    <div className="charts">
      <div className="charts-title">Last 6 Months (Revenue)</div>

      <Chart options={options} series={series} type="area" height={"400px"} />
    </div>
  );
};

export default Charts;
