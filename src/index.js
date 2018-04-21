import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from 'src/store/store'
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import './style/base.less';

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
render(App)
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(App)
  })
}
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
