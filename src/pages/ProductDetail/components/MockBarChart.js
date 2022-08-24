import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import BarChartCategory from '../../Main/components/BarChartCategory';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const MockBarChart = ({ category }) => {
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
      countArr.push(arr[i].review_count);
    }
    return countArr;
  };

  const labelData = [...getLabel(category)];
  const countData = [...getCount(category)];

  return (
    <BarChartCategory
      category={category}
      labelData={labelData}
      countData={countData}
    />
  );
};

export default MockBarChart;
