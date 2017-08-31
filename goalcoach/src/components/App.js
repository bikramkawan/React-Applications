/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {firebaseApp} from '../Firebase';
import Home from'./Home';
import Login from './Login'
import Register from  './Register'
import Dashboard from './Dashboard'
import {Redirect, Route, HashRouter, Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logUser} from '../actions'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authed: false,
        }
    }

    componentDidMount() {
        this.removeFirebaseEvent = firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                const {email} = user;
                this.setState({authed: true});
                this.props.logUser(email)

            } else {
                this.setState({
                    authed: false,
                })
            }
        })
    }

    componentWillUnmount() {
        this.removeFirebaseEvent()
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand">Goal Coach</Link>
                            </div>
                            <ul className="nav navbar-nav pull-right">
                                <li>
                                    <Link to="/" className="navbar-brand">Home</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                                </li>
                                <li>
                                    {this.state.authed
                                        ? <button
                                        style={{border: 'none', background: 'transparent'}}
                                        className="navbar-brand">Logout</button>
                                        : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/login' render={()=>this.state.authed ? <Redirect to='/dashboard'/> : <Login/>}/>
                        <Route path='/dashboard'
                               render={()=>this.state.authed ? <Dashboard/> : <Redirect to='/login'/>}/>
                        <Route path='/register' component={Register}/>
                    </Switch>
                </div>
            </HashRouter>)
    }

}


function mapStateToProps(state) {
    return {
        store: state
    }
}


export default connect(mapStateToProps, {logUser})(App);