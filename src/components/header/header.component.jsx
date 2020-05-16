import React from 'react';
import {connect} from "react-redux";
import  {auth} from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/logo.svg";

import './header.styles.scss';

const Header = ({currentUser}) => {
    return (
        <div className='header'>

            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className="options">
                <Link to='/shop' className='option'>
                    Shop
                </Link>
                <Link to='/shop' className='option'>
                    Contact
                </Link>
                {
                    currentUser? <div onClick={() => auth.signOut()} className='option'>SiGN OUT</div> :
                        <Link to='/signin' className='option'>
                            Signin
                        </Link>
                }

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);
