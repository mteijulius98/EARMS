import { Component, OnInit } from '@angular/core';
import { DeoService } from './deo.service';
import { Chart } from  'chart.js';

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
  constructor(private deoService:DeoService) { }

  ngOnInit() {
    this.deoService.viewDisinfo()
    .subscribe(res=> {
        // console.log(res);
        let males_data = res['dinfos'].map(res=>res.MALES)
        let females_data = res['dinfos'].map(res=>res.FEMALES)
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
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    data: females_data
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Overall Number of students in District '
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
    this.deoService.viewDisdis()
    .subscribe(res=>{
      // console.log(res);
        let albinsm=res['ddis'].map(res=>res.TOTAL)
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
                            '#ff8000',
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
  this.deoService.viewDistrictteachers()
  .subscribe(res=>{
    console.log(res);
    let wardteachers=res['dteachers'].map(res=>res.TOTAL)
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
                        '#ff8000',
                        '#40bf40',
                        '#9900ff',
                        '#6800dd',
                        'maroon'
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
