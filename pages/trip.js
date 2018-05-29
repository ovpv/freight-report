import {Component} from 'react';
import Page from './layouts/page';
import {PieChart,Pie,Cell,Tooltip,Legend} from 'recharts';
import axios from 'axios';
import Link from 'next/link';

const data = [{name: 'Profit', value: 3000}, {name: 'Expense', value: 2000}];

const colors = ['#0088FE', '#00C49F'];
 
export default class Trip extends Component{
    constructor(){
        super();
        this.state={
            trip:{},
            expense:{},
            truck:{}
        }
    }
    getTripDetails(){
        const tripId = this.props.url.query.id;
        console.log(tripId);
        const tripJSON = axios(`/api?query={trips(id:${tripId}){id,truck,from,to,line_adv,freight_amount,gross_earning,net_earning,expense{toll,driver,repairs,petrol,total}}}`);
        return tripJSON;
    }
    getTruckDetails(){
        if(this.state.trip){
            const truckId = this.state.trip.truck;
            const truckJSON = axios(`/api?query={trucks(id:${truckId}){id,model,license}}`);
            return truckJSON;
        }
    }
    componentWillMount(){
        this.getTripDetails().then((data)=>{
            this.setState({trip:data.data.data.trips[0]});
            this.setState({expense:data.data.data.trips[0].expense});
            this.getTruckDetails().then((data)=>{
                this.setState({truck:data.data.data.trucks[0]});
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));

    }
    render(){
        console.log(this.state.expense);
        return(
            <Page>
                <div className="container">
                    <section className="tr-sec basic p-4 mt-4">
                        <h3 className="mb-3">Basic Details</h3>
                        <div className="row">
                            <div className="left d-flex flex-column justify-content-center col-md-4 col-12">
                                <div className="field id">
                                    <p className="label m-0">#ID</p>
                                    <p className="value m-0">{this.state.trip.id}</p>
                                </div>
                                <div className="field license">
                                    <p className="label m-0">From</p>
                                    <p className="value m-0">{this.state.trip.from}</p>
                                </div>
                                <div className="field model">
                                    <p className="label m-0">To</p>
                                    <p className="value m-0">{this.state.trip.to}</p>
                                </div>
                            </div>
                            <div className="right d-flex col-md-8 col-12">
                                <PieChart width={730} height={250}>
                                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={1} outerRadius={80} fill="#82ca9d" label>
                                    {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]}/>))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </div>
                        </div>
                    </section>
                    <section className="tr-sec misc p-4 mt-4">
                        <h3 className="mb-3">Financial details</h3>
                        <div className="earning d-flex flex-column justify-content-center mb-3 mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Freight Amount</th>
                                        <th scope="col">Line Advance</th>
                                        <th scope="col">Gross Earning</th>
                                        <th scope="col">Net Earning</th>
                                        <th scope="col">Expense</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.trip.freight_amount}</td>
                                        <td>{this.state.trip.line_adv}</td>
                                        <td>{this.state.trip.gross_earning}</td>
                                        <td>{this.state.trip.net_earning}</td>
                                        <td>{this.state.expense.total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="tr-sec extended p-4 mt-4">
                        <h3 className="mb-3">Expense Details</h3>
                        <div className="mt-5">
                            <div className="earning d-flex flex-column justify-content-center mb-3">
                                <h5>Earning</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Toll</th>
                                        <th scope="col">Petrol/diesel</th>
                                        <th scope="col">Driver</th>
                                        <th scope="col">Repairs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.expense.toll}</td>
                                            <td>{this.state.expense.petrol}</td>
                                            <td>{this.state.expense.driver}</td>
                                            <td>{this.state.expense.repairs}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className="tr-sec misc p-4 mt-4">
                        <h3 className="mb-3">Miscellaneous Details</h3>
                        <div className="earning d-flex flex-column justify-content-center mb-3 mt-5">
                            <h5>Truck</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#id</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">License</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link href={`/trucks/${this.state.trip.truck}`}><a>{this.state.truck.id}</a></Link></td>
                                        <td>{this.state.truck.model}</td>
                                        <td>{this.state.truck.license}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </Page>
        )
    }
}