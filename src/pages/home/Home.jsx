import React from 'react';
import { connect } from 'react-redux'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {

        }
    }


    render() {
        return (
            <div className="home">
                home
            </div>

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
)(Home);
