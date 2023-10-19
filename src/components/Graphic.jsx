
import { Line  } from 'react-chartjs-2';
import 'chart.js/auto'


const TemperatureChart = ({ dailyTemp, hourlyTime  }) => {
  const chartData = {
    
    datasets: [
      {
        label: 'Temperature °C',
        data: dailyTemp, 
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
        labels: hourlyTime,
        grid: {
          display: false
      },
      ticks: {
          display: true 
      }
      },

      y: {
        type: 'linear',
        labels: dailyTemp,
        beginAtZero: true,
        grid: {
          display: false
      },
      ticks: {
          display: true 
      }
      }
    },
  };

  return <Line data={chartData} options={chartOptions}/>;
};

export default TemperatureChart;
