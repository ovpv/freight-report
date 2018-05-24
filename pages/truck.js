import {Component} from 'react';
import Page from './layouts/page';
import Chart from 'chart.js';

export default class Truck extends Component{
    componentDidMount(){
        this.drawChart();
    }
    drawChart(){
        var el = document.getElementById("truckChart");
        var myChart = new Chart(el, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
    render(){
        return(
            <Page>
                <div className="container">
                    <section className="basic d-flex row">
                        <h3>Basic Details</h3>
                        <div className="left d-flex col-md-6 col-12">
                            <div className="field id">
                                <p className="label">#ID</p>
                                <p className="value">21</p>
                            </div>
                            <div className="field license">
                                <p className="label">License</p>
                                <p className="value">MH04-YT-1234</p>
                            </div>
                            <div className="field model">
                                <p className="label">Model</p>
                                <p className="value">Mahindra container</p>
                            </div>
                        </div>
                        <div className="right d-flex col-md-6 col-12">
                            <canvas id="truckChart" width="200" height="200"></canvas>
                        </div>
                    </section>
                </div>
            </Page>
        )
    }
}