import {Component} from 'react';

export default class Form extends Component{
    render(){
        var formsubmit = [];
        if(this.props.type == "edit"){
            formsubmit.push(<button key="edit" className="btn btn-primary">Update Details</button>);
        }else{
            formsubmit.push(<button key="new" className="btn btn-primary">Add new Truck</button>);
        }
        return(
            <div className="fr-form mt-4">
                <section className="basic">
                    <h3>Basic Details</h3>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="truck-id">#</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Truck id" aria-label="truck-id" aria-describedby="truck-id"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="truck-license">License</span>
                        </div>
                        <input type="text" className="form-control" placeholder="License number" aria-label="truck-license" aria-describedby="truck-license"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="truck-model">Model</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Truck Model" aria-label="truck-model" aria-describedby="truck-model"/>
                    </div>
                </section>
                <section className="Extended Details">
                    <h3>Extended Details</h3>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="insurance-number">Insurance</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Insurance number" aria-label="insurance-number" aria-describedby="insurance-number"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="monthly-expense">Monthly Expense</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Amount" aria-label="monthly-expense" aria-describedby="monthly-expense"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="total-expense">Total Expense</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Amount" aria-label="total-expense" aria-describedby="total-expense"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="monthly-earning">Monthly Earning</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Amount" aria-label="monthly-earning" aria-describedby="monthly-earning"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="total-earning">Total Earning</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Amount" aria-label="total-earning" aria-describedby="total-earning"/>
                    </div>
                </section>
                <section className="pt-4 d-flex justify-content-end align-items-center">
                    {formsubmit}
                </section>
            </div>
        )
    }
}