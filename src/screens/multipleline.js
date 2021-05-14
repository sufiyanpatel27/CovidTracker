import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Positive',
            data: [260, 220, 240, 200, 250, 220, 225, 255, 200, 225, 230, 180],
            fill: true,
            backgroundColor: 'rgb(255, 201, 147, 0.2)',
            borderColor: 'rgb(255, 201, 147, 1)',
            yAxisID: 'y-axis-1',
            tension: 0.4,
            pointBackgroundColor: 'rgb(255, 156, 39)',

        },
        {
            label: 'Cured',
            data: [190, 197, 193, 205, 196, 198, 190, 203, 195, 220, 230, 180],
            fill: true,
            backgroundColor: 'rgb(124, 81, 233, 0.2)',
            borderColor: 'rgb(124, 81, 233)',
            yAxisID: 'y-axis-2',
            tension: 0.4,
            pointBackgroundColor: 'rgb(70, 0, 246)'
        },
    ],
};

const MultiAxisLine = () => (
    <>
        <Line data={data} />
    </>
);

export default MultiAxisLine;