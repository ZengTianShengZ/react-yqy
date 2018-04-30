import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import AV from 'leancloud-storage';
import Route from './router/'
import store from 'src/store/store'
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import 'src/utils/setRem'
import './style/base.less';

const APP_ID = 'En1iusKQs2fonnqJkrlkz5cy-gzGzoHsz';
const APP_KEY = '8ag3Ltg8n67CEjLlwmNOXctL';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


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
