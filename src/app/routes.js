import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import BlogPage from './components/blog-page/BlogPage';

import store from './store/store';

const requireAuth = (nextState, replaceState) => {
    console.log('auth required');
    const state = store.getState();
    if (!state.login) {
        const redirect = nextState.location.pathname;
        replaceState(null, `/login${redirect}`);
    }
};

const routes = 
    <div>
        <Layout>
            <Switch>
                <Route exact path="/" component={BlogPage}/>
                <Route path="/home" component={BlogPage}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/login" component={() => <h1>Login page mockup</h1>}/>
                <Route path="/admin" component={() => <h1>Authentication required mockup</h1>}
                    onEnter={requireAuth} />
                <Route path="*" component={() => <h1>Like a 404: unknown page</h1>}/>
            </Switch>
        </Layout>
    </div>;

export default routes;