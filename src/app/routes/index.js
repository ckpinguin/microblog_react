import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import blog from '../modules/blog';
import login from '../modules/auth/login';

// const requireAuth = (nextState, replaceState) => {
//     console.log('auth required');
//     const state = store.getState();
//     if (!state.login) {
//         const redirect = nextState.location.pathname;
//         replaceState(null, `/login${redirect}`);
//     }
// };

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    (isAuthenticated)
    ? (
      <Component {...props}/>
    )
    : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }}/>
    )
  )}/>
);

// Best practice (Medium: redux-best-practices-64d59775802e): Only
// use smart components (aka containers) as Route targets
const Routes = (store, {loggedInUser}) => (
    <Layout>
        <Switch>
            <Route
                exact path="/"
                component={blog.components.BlogPage}
            />
            <Route
                path="/home"
                component={blog.components.BlogPage}
            />
            <Route
                path="/blog/:id"
                component={blog.components.BlogPage}
            />
            <Route
                path="/blog/"
                component={blog.components.BlogPage}
            />
            <Route
                path="/login/"
                component={login.components.LoginPage}
            />
            <PrivateRoute
                isAuthenticated={true}
                path="/admin"
                component={() => <h1>Private area</h1>}
            />
            <Route
                path="*"
                component={() => <h1>Like a 404: unknown page</h1>}
            />
        </Switch>
    </Layout>
);

const mapStateToProps = (state) => {
    console.log('state userLoggedIn: ', login.selectors.getLoggedInUser(state));
    console.log('state: ', state);
    // console.log('state.routing.locationBeforeTransitions: ', state.routing.locationBeforeTransitions);
    return {
        loggedInUser: login.selectors.getLoggedInUser(state)
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(Actions, dispatch);
// };
// withRouter is needed to update page according to URL
export default withRouter(connect(
     mapStateToProps,
     null // mapDispatchToProps,
)(Routes));