import React, { Component } from 'react';
import Advertisement from './Advertisement';
import MultiStep from './step/react-multistep'
import StepOne from './step/stepOne'
import StepTwo from './step/stepTwo'
import StepThree from './step/stepThree'
import StepFour from './step/stepFour'

const steps = [
    { component: <StepOne />, name: "General Info" },
    { component: <StepTwo />, name: "Select Package" },
    { component: <StepThree />, name: "Payment" },
    { component: <StepFour />, name: "Save & Preview" }
]

const prevStyle = {}
const nextStyle = {}
class Content extends Component {
    handleStepChange = currentStep => { };
    render() {
        return (
            <section className="register-restaurent-sec section-padding bg-light-theme">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="sidebar-tabs main-box padding-20 mb-md-40">
                                <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Advertisement />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;