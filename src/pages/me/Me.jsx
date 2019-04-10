import React from 'react';
import { connect } from 'react-redux'

class Me extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            
        }
    }


    render() {
        return (
            "me"
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
)(Me);
