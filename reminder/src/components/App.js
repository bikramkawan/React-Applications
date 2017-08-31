/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, clearReminder} from '../actions'
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminderText: '',
            dueDate: ''
        }
    }

    addReminder = () => {
        this.props.addReminder(this.state.reminderText, this.state.dueDate)

    }


    deleteReminder = (id) => {
        this.props.deleteReminder(id);
    }


    renderReminders() {
        const {reminders} = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map((reminder, i)=> {
                        return (
                            <li key={i} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.reminderText}</div>
                                    <div><em>{ moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button"
                                     onClick={()=>this.deleteReminder(reminder.id)}>&#x2715;</div>
                            </li>
                        )
                    })}
            </ul>

        )
    }

    render() {
        return (<div className="App">
            <div className="title"> Simple Reminder App</div>
            <div className="form-inline">
                <div className="form-group">
                    <input className="form-control" placeholder="I have to ...."
                           onChange={({target})=>this.setState({reminderText: target.value})}
                    />

                    <input className="form-control" type="datetime-local"
                           onChange={({target})=>this.setState({dueDate: target.value})}/>

                </div>
                <button type="button" className="btn btn-success" onClick={this.addReminder}> Add Reminder</button>
            </div>
            {this.renderReminders()}
            <div className="btn btn-danger"
                 onClick={()=>this.props.clearReminder()}>
                Clear Reminders
            </div>

        </div>)
    }
}


function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminder})(App);