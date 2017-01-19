import React from 'react';
import ReactDom from 'react-dom';

import './Style.scss';

import Panel from './Panel'

function App() {
    return (
        <main>
            <Panel />
        </main>
    );
}

ReactDom.render(<App />, document.getElementById('root'));
