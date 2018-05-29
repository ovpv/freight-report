import { Component } from "react";
import Header from '../components/header';

export default class Page extends Component{
    render(){
        return(
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}