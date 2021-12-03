import React, { Component } from 'react';
import Slider from 'react-rangeslider'

class Deliverytime extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 50
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        const { value } = this.state
        const valuelabels = {
            0: '45',
            50: '60',
            100: 'Any'
          }
        return (
            <div className='slider'>
                <Slider
                    min={0}
                    max={100}
                    step={50}
                    labels={valuelabels}
                    value={value}
                    onChange={this.handleChange}
                />
                <div className='value pb-3'></div>
            </div>
        );
    }
}

export default Deliverytime;