import { Component } from "react";
import Page from './layouts/page';
import Link from 'next/link';

export default class Home extends Component{
    render(){
        return (
            <Page>
                <div>Hello</div>
                <Link prefetch href="/trucks"><a>Trucks</a></Link>
            </Page>
        ) 
    }
}