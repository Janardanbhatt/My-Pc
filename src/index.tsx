import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as mobx from 'mobx';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { defaultStores } from './stores/rootStore';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import './globalStyle';
import { addLocaleData } from "react-intl";
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';
// enable MobX strict mode
useStrict(true);
addLocaleData(en);
addLocaleData(fr);

const stores = defaultStores;

// window['mobx'] = mobx;

// window['stores'] = stores;

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
