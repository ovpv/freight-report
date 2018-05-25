import { Component } from "react";
import Header from '../components/header';
import {NextScript} from 'next/document';

export default class Page extends Component{
    render(){
        return(
            <div>
                <style global jsx>
                    {`
                        body{
                            background-color:#E0E0E0;
                        }
                    `}
                </style>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}