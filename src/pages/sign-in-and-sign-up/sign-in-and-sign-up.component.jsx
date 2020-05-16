import React, {Component} from "react";
import './sign-in-and-sign-up.style.scss';
import Signin from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
class SignInAndSignUp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('signin');
        return (
            <div className='sign-in-and-sign-up'>
                <Signin/>
                <SignUp/>
            </div>
        );
    }
}

export default SignInAndSignUp;

