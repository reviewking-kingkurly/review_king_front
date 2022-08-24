import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import DoughnutChart from './DoughnutChart';

ChartJS.register(ArcElement, Tooltip);

const MockData = ({ category }) => {
  const getLabel = arr => {
    const labelArr = [];

    for (let i = 0; i < arr.length; i++) {
      labelArr.push(arr[i].sub_category_name);
    }

    return labelArr;
  };

  const getCount = arr => {
    const countArr = [];

    for (let i = 0; i < arr.length; i++) {
      countArr.push(arr[i].sub_category_count);
    }

    return countArr;
  };

  const labelData = [...getLabel(category)];
  const countData = [...getCount(category)];

  return (
    <div className="chart doughnut">
      <DoughnutChart labelData={labelData} countData={countData} />
    </div>
  );
};

export default MockData;
