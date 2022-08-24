import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ labelData, countData }) => {
  const data = {
    labels: [...labelData],
    datasets: [
      {
        label: '연관 카테고리 BEST',
        data: [...countData],
        backgroundColor: [
          'rgba(241, 231, 254, 0.4)',
          'rgba(213, 184, 255, 0.4)',
          'rgba(159, 90, 253, 0.4)',
          'rgba(165, 55, 253, 0.4)',
          'rgba(140, 20, 252, 0.4)',
        ],
        borderColor: [
          'rgba(241, 231, 254, 1)',
          'rgba(213, 184, 255, 1)',
          'rgba(159, 90, 253, 1)',
          'rgba(165, 55, 253, 1)',
          'rgba(140, 20, 252, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
