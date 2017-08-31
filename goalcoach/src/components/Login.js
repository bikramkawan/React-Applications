/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {firebaseApp} from '../Firebase';
import {Link} from 'react-router-dom'


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn = () => {
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error=> this.setState({error}))

        console.log(this.state)
    }


    render() {
        return (<div className="form-inline" style={{margin: '5%'}}>
            <h2>Sign In</h2>
            <div className="form-group">

                <input className="form-control"
                       style={{marginRight: '5px'}}
                       type="text" placeholder="email"
                       onChange={({target})=>this.setState({email: target.value})}
                />
                <input className="form-control"
                       style={{marginRight: '5px'}}
                       type="password"
                       placeholder="password"
                       onChange={({target})=>this.setState({password: target.value})}/>
                <button className="btn btn-primary" onClick={this.signIn}>Sign In</button>
            </div>
            <div>{this.state.error.message}</div>
            <div><Link to="/register">Sign Up Instead</Link></div>

        </div>)
    }

}

export default SignIn;