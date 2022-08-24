import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [1, 2, 3, 4],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };
const BarChartCategory = ({ category, labelData, countData }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'BEST 카테고리',
      },
    },
  };

  const labels = [...labelData];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [...countData],
        backgroundColor: [
          'rgba(241, 231, 254)',
          'rgba(213, 184, 255)',
          'rgba(159, 90, 253)',
          'rgba(165, 55, 253)',
          'rgba(140, 20, 252)',
        ],
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChartCategory;
