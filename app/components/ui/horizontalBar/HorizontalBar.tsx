
'use client'
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export const HorizontalBar = ()=> {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const data = {
            labels: ['Unidad Grupo','Unidad Grupo', 'Unidad Grupo', 'Unidad Grupo', 'Unidad Grupo'],
            datasets: [
                {
                    label: 'Alertas',
                    backgroundColor: documentStyle.getPropertyValue('--secondary-200'),
                    borderColor: documentStyle.getPropertyValue('--secondary-200'),
                    borderRadius: 3,
                    barPercentage : 0.3,
                    data: [14, 11, 11, 7, 6]
                },
               
            ]
        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                        font: {
                            weight: 700
                        }
                        
                    },
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 700
                        }
                    },
                    grid: {
                        display: true,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 700
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data)
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        