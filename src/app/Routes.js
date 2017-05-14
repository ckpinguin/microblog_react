import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import * as Actions from './actions';

import Layout from './components/layout/Layout';
import BlogPage from './components/blog-page/BlogPage';
import LoginPage from './components/login-page/LoginPage';

// import store from './store/store';

// const requireAuth = (nextState, replaceState) => {
//     console.log('auth required');
//     const state = store.getState();
//     if (!state.login) {
//         const redirect = nextState.location.pathname;
//         replaceState(null, `/login${redirect}`);
//     }
// };

const PrivateRoute = ({ component: Component, loggedInUser, ...rest }) => (
  <Route {...rest} render={props => (
    (loggedInUser.id) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }}/>
    )
  )}/>
);


const Routes = ({currentUser}) => (
    <div>
        <Layout>
            <Switch>
                <Route exact path="/" component={BlogPage}/>
                <Route path="/home" component={BlogPage}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute currentUser={currentUser} path="/admin" component={() => <h1>Private area</h1>}/>
                <Route path="*" component={() => <h1>Like a 404: unknown page</h1>}/>
            </Switch>
        </Layout>
    </div>
);

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        loggedInUser: state.auth.loggedInUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};

export default withRouter(connect(
     mapStateToProps,
     mapDispatchToProps,
)(Routes));