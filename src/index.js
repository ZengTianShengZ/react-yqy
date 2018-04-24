import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Route from './router/'
import store from 'src/store/store'
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import 'src/utils/setRem'
import './style/base.less';

FastClick.attach(document.body);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
render(Route)
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route)
  })
}
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
