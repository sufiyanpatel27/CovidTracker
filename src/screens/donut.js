import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['positive', 'negative', 'cured', 'death'],
    datasets: [
        {
            data: [23, 10, 15, 30],
            backgroundColor: [
                '#4B47A5',
                '#FEC300',
                '#67D6F4',
                '#EFF4FA',
            ],
            borderColor: [
                '#4B47A5',
                '#FEC300',
                '#67D6F4',
                '#EFF4FA',
            ],
            borderWidth: 1,
            cutout: 70
        },
    ],
};

const DoughnutChart = () => (
    <>
        <h4>Disease Report</h4>
        <Doughnut data={data} />
    </>
);

export default DoughnutChart;