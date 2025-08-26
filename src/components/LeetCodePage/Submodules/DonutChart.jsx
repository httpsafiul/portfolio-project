import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
            label: "Problems Solved",
            data: [10, 20, 30],
            backgroundColor: ['#1CBABA', '#FFB700', '#F63737'],
        }]
    });

    useEffect(() => {
        if (!data) return;
        setChartData({
            labels: ['Easy', 'Medium', 'Hard'],
            datasets: [{
                label: "Problems Solved",
                data: [data.easy, data.medium, data.hard],
                backgroundColor: ['#1CBABA', '#FFB700', '#F63737'],
                hoverOffset: 4
            }]
        });
    }, [data]);

    return (
        <Doughnut
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
        />
    );
};

export default DonutChart;
