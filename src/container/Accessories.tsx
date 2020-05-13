import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
// import styled from 'styled-components';
// import { Image } from 'semantic-ui-react';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import SearchDealerButtonAcc from '../components/SearchDealerOnButtonAcc';
import { Responsive} from 'semantic-ui-react';


interface Props {
  mainStore: MainStore;
}

@observer
class Accessories extends Component<Props, {}> {
  render () {
      const { currentDealerInfo } = this.props.mainStore;

      return (
      <div id="accessories" >
          <div className="section6-image flw">
          </div>
          <div id="accessories-1" className="section6 flw">
              <div className="main text-center-padding">
                  <h2>
                      <FormattedMessage id="accessories-adventure-title"
                                        defaultMessage={ STRCONSTANT.accessories.default.adventure_title } />
                  </h2>
                  <p>
                      <FormattedMessage id="accessories-adventure-p1"
                                        defaultMessage={ STRCONSTANT.accessories.default.adventure_p1 } />
                  </p>
              </div>
              <div className="text-center">
                  <div className="fn">
                      <div className="button">
                          { currentDealerInfo.dealer_number === '00000' && <SearchDealerButtonAcc /> }
                          <Responsive minWidth={769}>
                          { currentDealerInfo.dealer_number != '00000' &&
                          <a className="btn_black"
                              onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Middle') }
                              href={ this.props.mainStore.personalizeMazda } target="_blank" title="">
                               <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                          </a> }
                          </Responsive>
                          <Responsive maxWidth={768}>
                              { currentDealerInfo.dealer_number != '00000' &&
                              <a className="btn_black"
                                 onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Middle') }
                                 href={ this.props.mainStore.personalizeMazda } title="">
                                  <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                              </a> }
                          </Responsive>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default typedInject('mainStore')(Accessories);
