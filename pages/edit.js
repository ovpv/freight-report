import {Component} from 'react';
import Page from '../pages/layouts/page';
import TruckForm from './components/truck-form';

export default class Edit extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Page>
                <div className="container">
                        <TruckForm type={this.props.url.query.type}/>
                </div>
            </Page>            
        )
    }
}