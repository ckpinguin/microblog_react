import React from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
// import * as Actions from './actions';

import Layout from './components/layout/Layout';
import blog from './modules/blog';
import login from './modules/auth/login';

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

// Best practice (Medium: redux-best-practices-64d59775802e): Only
// use smart components (aka containers) as Route targets
const Routes = ({loggedInUser}) => (
    <div>
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
                    path="/blog"
                    component={blog.components.BlogPage}
                />
                <Route
                    path="/login"
                    component={login.components.LoginPage}
                />
                <PrivateRoute
                    loggedInUser={loggedInUser}
                    path="/admin"
                    component={() => <h1>Private area</h1>}
                />
                <Route
                    path="*"
                    component={() => <h1>Like a 404: unknown page</h1>}
                />
            </Switch>
        </Layout>
    </div>
);

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        loggedInUser: login.selectors.getAll(state)
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(Actions, dispatch);
// };

export default withRouter(connect(
     mapStateToProps,
     null // mapDispatchToProps,
)(Routes));