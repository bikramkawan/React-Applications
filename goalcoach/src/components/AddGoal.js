/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {goalRef} from '../Firebase'
import {connect} from 'react-redux'

class AddGoal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }


    addGoal = ()=> {
        if (this.props) {
            const {title} = this.state;
            const {email} = this.props.user;
            goalRef.push({email, title})
        }

    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add a goal"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        onChange={({target})=>this.setState({title: target.value})}
                    />
                    <button className="btn btn-success"
                            type="button"
                            onClick={this.addGoal}
                    >
                        Submit
                    </button>

                </div>

            </div>

        )

    }

}

function mapStateToProps(state) {
    if (!state) return {};
    const {user} = state;
    return {
        user
    }

}
export default connect(mapStateToProps, null)(AddGoal);