import React from 'react';
import { render } from 'react-dom';
import { Preview, print } from '../';
import template from './template.html';

const App = () => (
    <div>
        <Preview id={'html-template'} html={template} width={'330'} height={'210'} />
        <button onClick={() => print('a', 'html-template', 'l', 'output')}> print landscape</button>
        <Preview id={'jsx-template'} width={'210'} height={'297'} >
            <p>adsf</p>
        </Preview>
        <button onClick={() => print('a', 'jsx-template', 'p')}> print portrait</button>
    </div>
);
render(<App />, document.getElementById("root"));