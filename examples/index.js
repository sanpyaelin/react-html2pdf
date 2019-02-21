import React from 'react';
import { render } from 'react-dom';
import { Preview, print } from '../src';
import template from './template.html';

const App = () => (
    <div>
        <Preview id={'html-template'} html={template}/>
        <button onClick={()=>print('a', 'html-template')}> print</button>
        <Preview id={'jsx-template'} >
            <p>adsf</p>
        </Preview>
        <button onClick={()=>print('a', 'jsx-template')}> print</button>
    </div>
);
render(<App />, document.getElementById("root"));