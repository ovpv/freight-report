import { Component } from "react";
import Page from './layouts/page';
import axios from 'axios';
import config from '../config';
import Router from 'next/router';

export default class Trucks extends Component{
    constructor(){
        super();
        this.state = {
            trucks:[]
        }
    }
    getTrucks(){
        const trucksJSON = axios('/api?query={trucks{id,license,model}}');
        return trucksJSON;
    }
    componentWillMount(){
        this.getTrucks().then((data)=>{
            this.setState({trucks:data.data.data.trucks});
        }).catch(err => console.error(err));
    }
    onEditClick(e){
        const id = e.currentTarget.getAttribute("data-id");;
        console.log(id);
        Router.push({
          pathname: '/edit',
          query: { type:'edit',id }
        })
    }
    onDeleteClick(e){
        console.log(e);
    }
    render(){
        let trucksArray = [];
        if(this.state.trucks.length !== 0){
            trucksArray= this.state.trucks.map((truck,index)=>{
                return(
                    <tr key={index}>
                        <th scope="row">{truck.id}</th>
                        <td>{truck.license}</td>
                        <td>{truck.model}</td>
                        <td>
                            <span onClick={this.onEditClick} data-id={truck.id} className="d-inline-flex justify-content-center align-items-center pl-3"><i className="far fa-edit"></i> Edit</span>
                            <span onClick={this.onDeleteClick} data-id={truck.id} className="d-inline-flex justify-content-center align-items-center pl-3"><i className="far fa-trash-alt"></i> Delete</span>
                        </td>
                    </tr>
                )
            });
        }else{
            trucksArray.push(<span key="no-1">No trucks found</span>)
        }
        return(
            <Page>
                <style jsx>
                    {`
                        .fr-table{
                            background-color:#F2FDFF;
                        }
                    `}
                </style>
                <section className="container mt-4">
                    <div className="fr-table p-4">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">License</th>
                                <th scope="col">Model</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trucksArray}
                            </tbody>
                        </table>
                    </div>
                </section>
            </Page>
        )
    }
}