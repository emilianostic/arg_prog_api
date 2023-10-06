
import { Line  } from 'react-chartjs-2';
import 'chart.js/auto'
import data from "./data"

for (let i = 0; i < data.hourly.time.length; i++) {
  data.hourly.time[i] = data.hourly.time[i].split('T')[1];
}

const TemperatureChart = ({ data }) => {
  const chartData = {
    
    datasets: [
      {
        label: 'Temperature °C',
        data: data.hourly.temperature_2m, // Array de temperaturas
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        responsive: true,
        width: 500,
        height: 400,
        
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: data.hourly.time,
        grid: {
          display: false
      },
      ticks: {
          display: true // Esto muestra los valores del eje x
      }
      },

      y: {
        type: 'linear',
        labels: data.hourly.temperature_2m,
        beginAtZero: true,
        grid: {
          display: false
      },
      ticks: {
          display: true // Esto muestra los valores del eje x
      }
      }
    },
  };

  return <Line data={chartData} options={chartOptions}/>;
};

export default TemperatureChart;
