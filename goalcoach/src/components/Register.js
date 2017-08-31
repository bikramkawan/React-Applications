/**
 * Created by bikramkawan on 8/31/17.
 */
import React, {Component} from 'react';
import {firebaseApp} from '../Firebase';
import {Link} from 'react-router-dom'

class SignUp extends Component {

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

    signUp = () => {
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error=> this.setState({error}))

        console.log(this.state)
    }


    render() {

        return (<div className="form-inline" style={{margin: '5%'}}>
            <h2>Sign Up</h2>
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
                <button className="btn btn-primary" onClick={this.signUp}>Sign Up</button>
            </div>
            <div>{this.state.error.message}</div>
            <div><Link to="/login">Already a user? Sign In Instead</Link></div>
        </div>)
    }

}

export default SignUp;