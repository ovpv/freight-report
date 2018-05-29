import { Component } from "react";
import Page from './layouts/page';
import Link from 'next/link';
import axios from 'axios'; 

export default class Trips extends Component{
    constructor(){
        super();
        this.state = {
            trips:[]
        }
    }
    gettrips(){
        const tripsJSON = axios('/api?query={trips{id,from,to,net_earning,expense{total}}}');
        return tripsJSON;
    }
    componentWillMount(){
        this.gettrips().then((data)=>{
            this.setState({trips:data.data.data.trips});
        }).catch(err => console.error(err));
    }
    onDeleteClick(e){
        console.log(e);
    }
    render(){
        let tripsArray = [];
        if(this.state.trips.length !== 0){
            tripsArray= this.state.trips.map((trip,index)=>{
                return(
                    <tr key={index}>
                        <th scope="row">{trip.id}</th>
                        <td>{trip.from}</td>
                        <td>{trip.to}</td>
                        <td>{trip.net_earning}</td>
                        <td>{trip.expense.total}</td>
                        <td>
                            <Link as={`/trips/${trip.id}`} href={`/trip?id=${trip.id}`}><a className="d-inline-flex justify-content-center align-items-center pl-3"><i className="fas fa-eye"></i>View</a></Link>
                            <Link as={`edit/trips/${trip.id}`} href={`/edit?type=trip&id=${trip.id}&page=edit`}><a className="d-inline-flex justify-content-center align-items-center pl-3"><i className="far fa-edit"></i> Edit</a></Link>
                            <span onClick={this.onDeleteClick} data-id={trip.id} className="d-inline-flex justify-content-center align-items-center pl-3"><i className="far fa-trash-alt"></i> Delete</span>
                        </td>
                    </tr>
                )
            });
        }else{
            tripsArray.push(<span key="no-1">No trips found</span>)
        }
        return (
            <Page>
                <div className="container">
                    <div>
                        <section className="container mt-4">
                            <div className="fr-table p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">from</th>
                                        <th scope="col">to</th>
                                        <th scope="col">Net Earning</th>
                                        <th scope="col">Net Expense</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tripsArray}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </Page>
        ) 
    }
}