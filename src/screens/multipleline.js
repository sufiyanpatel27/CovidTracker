import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
    datasets: [
        {
            label: 'Positive',
            data: [300, 250, 275, 230, 175, 250, 290],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
        },
        {
            label: 'Cured',
            data: [250, 275, 225, 175, 250, 200, 225],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnArea: false,
                },
            },
        ],
    },
};

const MultiAxisLine = () => (
    <>
        <Line data={data} options={options} />
    </>
);

export default MultiAxisLine;