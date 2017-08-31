/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {goalRef} from '../Firebase'
import {connect} from 'react-redux'
import {setGoals} from '../actions'
import GoalItem from './GoalItem'

class GoalList extends Component {


    componentDidMount() {
        goalRef.on('value', snap=> {
            let goals = [];
            snap.forEach((goal)=> {
                const {email, title} = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey})
            })
            this.props.setGoals(goals);

        })
    }


    render() {

        return (<div>{this.props.goals.map((goal, index)=><GoalItem key={index} goal={goal}/>) }</div>)
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    const {goals} = state
    return {goals}

}


export default connect(mapStateToProps, {setGoals})(GoalList);