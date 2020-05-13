import { Component } from 'react';
import * as React from 'react';
// import { Segment, Container, Grid, Responsive, List } from 'semantic-ui-react';
// import styled from 'styled-components';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";
import { MainStore } from '../stores/mainStore';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';

/*
const StyleFooter = styled.div`
`;
*/


interface Props {
  mainStore: MainStore;
}

@observer
class Footer  extends Component<Props, {}> {
  state = {
    isDisclaimerOpen: false
  };

  
  render () {
    return (
      <footer className="flw">
      <div className="main text-center-padding">
            <ul>
              <li>
                <a href={ this.props.mainStore.lang == 'en' ? 'https://www.mazda.ca/' : 'https://www.mazda.ca/fr/' } title="Mazda.ca" target="_blank">
                  <FormattedMessage
                      id="mazda"
                      defaultMessage={ STRCONSTANT.footer.default.mazda }
                  />
                </a>
              </li>
              <li>
                <a href={ this.props.mainStore.lang == 'en' ? 'https://www.mazda.ca/en/terms/' : 'https://www.mazda.ca/fr/conditions/'} title="Terms" target="_blank">
                  <FormattedMessage
                      id="term"
                      defaultMessage={ STRCONSTANT.footer.default.term }
                  />
                </a>
              </li>
              <li>
                <a href={ this.props.mainStore.lang == 'en' ? 'https://www.mazda.ca/en/privacy/' : 'https://www.mazda.ca/fr/politique-de-confidentialite/'} title="Privacy" target="_blank">
                  <FormattedMessage
                      id="privacy"
                      defaultMessage={ STRCONSTANT.footer.default.privacy }
                  />
                </a>
              </li>
              <li>
                <a>
                  <FormattedMessage
                      id="year"
                      defaultMessage={ STRCONSTANT.footer.default.year }
                  />
                </a>
              </li>
            </ul>
            <div className="flw">
                  <p>
                      <FormattedMessage id="footer-p1"
                                        defaultMessage={ STRCONSTANT.footer.default.p1 } />
                  </p>
            </div>
      </div>
    </footer>
    );
  }
}

export default typedInject('mainStore')(Footer);