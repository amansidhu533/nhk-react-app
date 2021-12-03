import React, { Component } from 'react';
import Slider from 'react-rangeslider'

class Distance extends Component {
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
            0: '0 mi',
            1: '1 mi',
            2: '2 mi',
            3: '3 mi',
            4: '4 mi',
            5: '5 mi',
            6: '6 mi',
            7: '7 mi',
            8: '8 mi',
            9: '9 mi',
            10: '10 mi',
          }
        return (
            <div className='slider'>
                <Slider
                    min={0}
                    max={10}
                    step={1}
                    labels={valuelabels}
                    value={value}
                    onChange={this.handleChange}
                />
                <div className='value pb-3'></div>
            </div>
        );
    }
}

export default Distance;