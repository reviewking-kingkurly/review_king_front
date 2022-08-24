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

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'BEST 카테고리',
//     },
//   },
// };

// const labels = [];

// export const data = {
//   labels,
//   datasets: [
//     {
//       data: [],
//       backgroundColor: ['red', 'blue', 'gray', 'violet', 'purple'],
//     },
//   ],
// };

const MockBarChart = ({ category }) => {
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'BEST 카테고리',
  //     },
  //   },
  // };

  // const labels = [1, 2, 3, 4];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       data: [1, 2, 3, 4],
  //       backgroundColor: ['red', 'blue', 'gray', 'violet', 'purple'],
  //     },
  //   ],
  // };

  // const dataSet = data.datasets[0].data;

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
  // useEffect(() => {
  //   const labelData = [...getLabel(category)];
  //   const countData = [...getCount(category)];

  //   console.log('this is category name', labelData);
  //   console.log('this is category count', countData);

  //   labels.concat(...labelData);
  //   dataSet.concat(...countData);

  //   console.log('labels', labels);
  //   console.log('count', dataSet);
  // }, [category, labels, dataSet]);

  // console.log(labels);
  // labels.push(...labelData);
  // dataSet.push(...countData);
  // return <Bar options={options} data={data} />;

  return (
    <BarChartCategory
      category={category}
      labelData={labelData}
      countData={countData}
    />
  );
};

export default MockBarChart;
