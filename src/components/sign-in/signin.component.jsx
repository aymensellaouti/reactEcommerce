import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import FormInput from "../form-input/form-input.component";
import './signin.styles.scss';
import CustomButton from "../custon-button/custom-button.component";
import {auth, signInWithGoogle} from "./../../firebase/firebase.utils";

export default class Signin extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({email: '', password: ''});
          const {history} = this.props;
          history.push('/');
        } catch (error){
          console.log('erreur login with email and password', error);
        }
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className='sign-in'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type='Submit'>
                            Sign IN
                        </CustomButton>
                        <CustomButton
                            isGoogleSignIn={true}
                            onClick={signInWithGoogle}>
                            Sign IN With GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
