import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    barChart: any[];
    pieChart1: any[];
    pieChart2: any[];
    constructor() { }

    ngOnInit() {
        this.barChart = new Chart('chart1', {
            type: 'bar',
            data: {
                labels: ["Form I", "Form II", "Form III", "Form IV", "Form V", "Form VI"],
                datasets: [{
                    label: 'Males',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: [12, 19, 3, 5, 2, 3]
                },
                {
                    label: 'Females',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    data: [12, 19, 3, 5, 2, 3]
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Number of students in {name} ward [number]'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });

        this.pieChart1 = new Chart('chart2', {
            type: 'pie',
            data: {
                labels: [
                    'Blind',
                    'Low Vision',
                    'Hearing Impairment'
                ],
                datasets: [
                    {
                        data: [120, 40, 60],
                        backgroundColor: [
                            '#ff8000',
                            '#40bf40',
                            '#9900ff'
                        ]
                    }
                ]
            },
            options:{
                title: {
                    display: true,
                    text: 'Students with special needs'
                }
            }
        });
        
        this.pieChart2 = new Chart('chart3', {
            type: 'pie',
            data: {
                labels: [
                    'Science',
                    'Arts',
                    'Business',
                    'Technical'
                ],
                datasets: [
                    {
                        data: [120, 40, 60,50],
                        backgroundColor: [
                            '#ff8000',
                            '#40bf40',
                            '#9900ff'
                        ]
                    }
                ]
            },
            options:{
                title: {
                    display: true,
                    text: 'Teachers per category'
                }
            }
        });
    }



}
