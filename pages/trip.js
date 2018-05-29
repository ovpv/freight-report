import {Component} from 'react';
import Page from './layouts/page';
import {PieChart,Pie,Cell,Tooltip,Legend} from 'recharts';

const data = [{name: 'Profit', value: 3000}, {name: 'Expense', value: 2000}];

const colors = ['#0088FE', '#00C49F'];
 
export default class Trip extends Component{
    render(){
        return(
            <Page>
                <div className="container">
                    <section className="tr-sec basic p-4 mt-4">
                        <h3 className="mb-3">Basic Details</h3>
                        <div className="row">
                            <div className="left d-flex flex-column justify-content-center col-md-4 col-12">
                                <div className="field id">
                                    <p className="label m-0">#ID</p>
                                    <p className="value m-0">21</p>
                                </div>
                                <div className="field license">
                                    <p className="label m-0">License</p>
                                    <p className="value m-0">MH04-YT-1234</p>
                                </div>
                                <div className="field model">
                                    <p className="label m-0">Model</p>
                                    <p className="value m-0">Mahindra container</p>
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
                        <h3 className="mb-3">Recent Trip details</h3>
                        <div className="earning d-flex flex-column justify-content-center mb-3 mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#id</th>
                                        <th scope="col">from</th>
                                        <th scope="col">to</th>
                                        <th scope="col">Amount rcvd</th>
                                        <th scope="col">Expenses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1231123</td>
                                        <td>Mumbai</td>
                                        <td>Baroda</td>
                                        <td>12312</td>
                                        <td>3434</td>
                                    </tr>
                                    <tr>
                                        <td>1231123</td>
                                        <td>Mumbai</td>
                                        <td>Baroda</td>
                                        <td>12312</td>
                                        <td>3434</td>
                                    </tr>
                                    <tr>
                                        <td>1231123</td>
                                        <td>Mumbai</td>
                                        <td>Baroda</td>
                                        <td>12312</td>
                                        <td>3434</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-info">View all</button>
                        </div>
                    </section>
                    <section className="tr-sec extended p-4 mt-4">
                        <h3 className="mb-3">Extended Details</h3>
                        <div className="mt-5">
                            <div className="earning d-flex flex-column justify-content-center mb-3">
                                <h5>Earning</h5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">This month</th>
                                        <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$213213</td>
                                            <td>$213213000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="earning d-flex flex-column justify-content-center mb-3">
                                <h5>Profits</h5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">This month</th>
                                        <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$213213</td>
                                            <td>$213213000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="earning d-flex flex-column justify-content-center mb-3">
                                <h5>Expenses</h5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">This month</th>
                                        <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$213213</td>
                                            <td>$213213000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className="tr-sec misc p-4 mt-4">
                        <h3 className="mb-3">Miscellaneous Details</h3>
                        <div className="earning d-flex flex-column justify-content-center mb-3 mt-5">
                            <h5>Insurance</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Monthly EMI</th>
                                        <th scope="col">Next EMI date</th>
                                        <th scope="col"># of years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1231123</td>
                                        <td>Adithy birla Insurance</td>
                                        <td>3456</td>
                                        <td>12th April 2019</td>
                                        <td>5</td>
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