import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
// import styled from 'styled-components';
// import { Image } from 'semantic-ui-react';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import SearchDealerOnButtonQuote from '../components/SearchDealerOnButtonQuote';
import { Responsive} from 'semantic-ui-react';


interface Props {
  mainStore: MainStore;
}

@observer
class Tires extends Component<Props, {}> {
  render () {
      const { currentDealerInfo } = this.props.mainStore;

      return (
      <div id="tires">
          <div className="mid_container">             
                <ul className="main flw">            
                    <li>
                        <div className="image_item" >
                            <img src="img/tire_logo_1.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item"  >
                            <img src="img/tire_logo_2.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item" >
                            <img src="img/tire_logo_3.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_13.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img src="img/tire_logo_4.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_5.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_6.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img src="img/tire_logo_14.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_7.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_8.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img src="img/tire_logo_9.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_10.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img  src="img/tire_logo_11.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="image_item">
                            <img src={(this.props.mainStore.lang == 'fr') ?'img/tire_logo_12_fr.png' : 'img/tire_logo_12.png'} alt="" />
                        </div>
                    </li>                    
                </ul>
          </div>
          <div id="tires-1" className="section6 flw">
              <div className="main text-center-padding">
              <Responsive minWidth={769}>
                  <h2>
                      <FormattedMessage id="tires-title"
                                        defaultMessage={ STRCONSTANT.tires.default.tires_title } />
                  </h2>
              </Responsive>
              <Responsive maxWidth={768}>
                <h2>
                      <FormattedMessage id="tires-title-mobile"
                                        defaultMessage={ STRCONSTANT.tires.default.tires_title } />
                </h2>
              </Responsive>
              
                  <p>
                      <FormattedMessage id="tires-p1"
                                        defaultMessage={ STRCONSTANT.tires.default.tires_p1 } />
                  </p>
              </div>
              <div className="text-center">
                  <div className="fn">
                      <div className="button">
                      { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonQuote /> }
                          <Responsive minWidth={769}>
                          { currentDealerInfo.dealer_number != '00000' &&
                          <a className="btn_black"
                              onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Middle') }
                              href={ this.props.mainStore.quoteTires } target="_blank" title="">
                               <FormattedMessage id="tires-quote-your-tires" defaultMessage={ STRCONSTANT.tires.default.quote_your_tires } />
                          </a> }
                          </Responsive>
                          <Responsive maxWidth={768}>
                              { currentDealerInfo.dealer_number != '00000' &&
                              <a className="btn_black"
                                 onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Middle') }
                                 href={ this.props.mainStore.quoteTires } title="">
                                  <FormattedMessage id="tires-quote-your-tires" defaultMessage={ STRCONSTANT.tires.default.quote_your_tires } />
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
export default typedInject('mainStore')(Tires);
