import {Component} from 'react';
import Page from '../pages/layouts/page';
import Form from './components/form';

export default class Edit extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Page>
                <div className="container">
                        <Form type={this.props.url.query.type}/>
                </div>
            </Page>            
        )
    }
}