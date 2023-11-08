import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TemperatureChart = ({ dailyTemp, hourlyTime }) => {
  const chartData = {
    datasets: [
      {
        label: "Temperature by hour today °C",
        data: dailyTemp,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(117, 23, 105)",
        responsive: true,
        width: 500,
        height: 400,
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        type: "category",
        labels: hourlyTime,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },

      y: {
        type: "linear",
        labels: dailyTemp,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default TemperatureChart;
