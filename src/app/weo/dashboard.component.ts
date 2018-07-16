import { Component, OnInit } from '@angular/core';
import { Chart } from  'chart.js';
import { WeoService } from './weo.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    barChart=[];
    pieChart1: any[];
    pieChart2: any[];
    form1=[];
    males_data = [];
    females_data = [];
    constructor(private weoService:WeoService) { }

    ngOnInit() {
        this.weoService.viewWardinfo()
        .subscribe(res=> {
            console.log(res);
            let males_data = res['infos'].map(res=>res.MALES)
            let females_data = res['infos'].map(res=>res.FEMALES)
            this.barChart = new Chart('chart1', {
                type: 'bar',
                data: {
                    labels: ["Form I", "Form II", "Form III", "Form IV", "Form V", "Form VI"],
                    datasets: [{
                        label: 'Males',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        data: males_data
                    },
                    {
                        label: 'Females',
                        backgroundColor: 'ffe0e6',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        data: females_data
                    }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Number Of Overall Students '
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
            
        })
        this.weoService.viewWardis()
        .subscribe(res=>{
          
            let albinsm=res['wdis'].map(res=>res.TOTAL)
            this.pieChart1 = new Chart('chart2', {
                type: 'pie',
                data: {
                    labels: [
                        'Albino',
                        'Uoni Hafifu',
                        'Wasioona',
                        'Viziwi',
                        'Viziwi Wasioona',
                        'Ulemavu wa Viungo',
                        'Ulemavu wa Akili'
    
                    ],
                    datasets: [
                        {
                            data: albinsm,
                            backgroundColor: [
                                '#3cba9f',
                                '#40bf40',
                                '#9900ff',
                                '#9988ff',
                                '#5600bb',
                                '#dfd00a',
                                'red'
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
            })
        })
      this.weoService.viewWardteachers()
      .subscribe(res=>{
        let wardteachers=res['wteachers'].map(res=>res.TOTAL)
        this.pieChart2 = new Chart('chart3', {
            type: 'pie',
            data: {
                labels: [
                    'Arts',
                    'Bussiness',
                    'Science',
                    'Special Group',
                    'Technical'
                ],
                datasets: [
                    {
                        data: wardteachers,
                        backgroundColor: [
                            '#3e95cd',
                            '#40bf40',
                            '#9900ff',
                            '#6800dd',
                            '#3cba9f'
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
        })
      })

      
 
    }



}
