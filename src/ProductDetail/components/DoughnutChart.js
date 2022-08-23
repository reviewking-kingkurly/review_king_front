import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['양파', '당근', '감자', '마늘', '대파'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [6, 4, 3, 3, 2],
    },
  ],
};

const DoughnutChart = () => {
  const [donutData, setDonutData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3000/data/doughnutData.json').then(data => {
      setDonutData(data.data.results);
      console.log('donut', data.data.results);
    });
  }, []);

  console.log(donutData);

  const getLabel = arr => {
    const labelArr = [];
    for (let i = 0; i < arr.length; i++) {
      labelArr.push(arr[i].sub_category_name);
    }
    return labelArr;
  };

  const getNumber = arr => {
    const numArr = [];
    for (let i = 0; i < arr.length; i++) {
      numArr.push(arr[i].sub_category_count);
    }
    return numArr;
  };

  // const label = getLabel(donutData);
  // const count = getNumber(donutData);
  // console.log('getLabel', getLabel(donutData));
  // console.log('getNum', getNumber(donutData));
  // const state = {
  //   labels: label,
  //   datasets: [
  //     {
  //       label: 'Rainfall',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: count,
  //     },
  //   ],
  // };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
