import { Component } from 'react';
import * as React from 'react';
//import Footer from './Footer';
//import TopNav from './TopNav';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import MainContainer from './MainContainer';
import { IntlProvider } from 'react-intl';
import i18n from '../i18n';

interface Props {
  mainStore: MainStore;
}
@observer
class App extends Component<Props, {}> {
  constructor(props) {
    super(props);
    document.title = (this.props.mainStore.lang === 'fr') ? `L'Événement Pneus Mazda` : 'The Mazda Tire Event';
  }
  render() {
    const { lang, zonalApiCall } = this.props.mainStore;
    return (
      <IntlProvider locale={lang} messages={i18n[lang]}>
        <div className="wrapper">
          <div className="home">
          { zonalApiCall.case({
            pending: () => {},
            rejected: () => {},
            fulfilled: () => {},
          })}
          
          {/*<TopNav />*/}
          <MainContainer />
          {/*<Footer />*/}
        </div>
      </div>
      </IntlProvider>
    );
  }
}

export default typedInject('mainStore')(App);
