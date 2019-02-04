import React, {Component} from "react";
import AuthHelperMethods from '../AuthHelperMethods';
import Nav from '../Navbar'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./index.css"


export default class Register extends Component {
    
    Auth = new AuthHelperMethods();
    state = {
        username: "",
        password: ""
    }

    _handleChange = (e) => {
        
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

        console.log(this.state);
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        
        axios.post("/Register", {
                username: this.state.username,
                password: this.state.password
            }).then((data) => {
                console.log(data);
                this.props.history.replace('/Login');
            })
    }

    componentDidMount() {
        console.log(this.Auth.loggedIn());
        if(this.Auth.loggedIn()){
            this.props.history.push('/profile')
        }
    }

    render() {


        return (
            <React.Fragment>
            <div id="bg"></div>
                <Nav />
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1>Signup</h1>
                        </div>
                        <form className="box-form">
                            <input
                                className="form-item"
                                placeholder="Username"
                                name="username"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <button className="form-submit" onClick={this.handleFormSubmit}>SIGN UP</button>
                        </form>
                        <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
                    </div>
           
                </div>
                
            </React.Fragment>
        );
    }

}