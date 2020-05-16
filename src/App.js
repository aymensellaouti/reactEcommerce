import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Item from "./components/Item/item.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';

import {setCurrentUser, setCurrentUser2} from "./redux/user/user.action";
class App extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        const {setCurrentUser, setCurrentUser2} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    console.log('before calling setCurrentUser');
                   setCurrentUser2({
                           id: snapshot.id,
                           ...snapshot.data()
                   }, () => {console.log(this.state.currentUser)});
                    console.log('After calling setCurrentUser');
                });
            } else {
                console.log('before calling setCurrentUser with else');
                setCurrentUser(userAuth);
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
      const {currentUser} = this.props;
      return (
          <div className="App">
              {/*user={this.state.currentUser}*/}
              <Header  />
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/hats" component={Item}/>
                  <Route exact path="/shop" component={ShopPage}/>
                  <Route exact path="/signin" render={()=>currentUser? (<Redirect to='/'/>) : (<SignInAndSignUp/>)} />
              </Switch>
          </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCurrentUser2: user => dispatch(setCurrentUser2(user)),
});
const mapStateToProps = ({user}) => {
    return {currentUser: user.currentUser}
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
