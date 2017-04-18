import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

const title = 'CK\'s microblog!';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Layout>
            <h1>{title}</h1>
            <h2>Form would be here...</h2>
            <p>Attention item</p>
            <ul>
                <li>some blog entries here...</li>
                <li>some more entries here...</li>
                <li>and so on, etc...</li>
            </ul>
        </Layout>,
        div);
});
