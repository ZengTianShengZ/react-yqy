import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
