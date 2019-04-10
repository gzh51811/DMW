import React from 'react';
import { connect } from 'react-redux'

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            
        }
    }


    render() {
        return (
            "ShoppingCart"
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
)(ShoppingCart);
