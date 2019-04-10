import React from 'react';
import { connect } from 'react-redux'

class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            
        }
    }


    render() {
        return (
            "Sort"
        )
    }
}

export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(Sort);
