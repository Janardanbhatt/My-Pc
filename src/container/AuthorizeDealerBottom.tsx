import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import SearchDealerOnName from '../components/SearchDealerOnName';
import SearchDealerOnButtonBottom from '../components/SearchDealerOnButtonBottom';
import SearchDealerOnButtonQuoteBottom from '../components/SearchDealerOnButtonQuoteBottom';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";
import { Responsive} from 'semantic-ui-react';

interface Props {
  mainStore: MainStore;
}

@observer
class AuthorizeDealerBottom extends Component<Props, {}> {
  render () {
    const { currentDealerInfo } = this.props.mainStore;

    return (
      <div id="authorized-dealer-bottom" className="scetion2 flw section7" style={{paddingBottom: '0px', background: '#e8e8e8'}}>
         <div style={{paddingTop: '30px', marginBottom: '60px'}}>
                   <div>
                       <div className="text-center" style={{minHeight: '0px', paddingRight: '20px', paddingLeft: '20px'}}>
                            <div className="sec2_heading flw">
                                {
                                    (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null ? <h1>{ currentDealerInfo.dealer_name }</h1> : '')
                                }
                                <Responsive minWidth={769}>
                                    {
                                        (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null ?  <p> {currentDealerInfo.dealer_address} • {currentDealerInfo.dealer_city}, {currentDealerInfo.dealer_state}&nbsp;&nbsp;{currentDealerInfo.dealer_zip} • {currentDealerInfo.dealer_phone}</p> :'')
                                    }
                                </Responsive>
                                <Responsive maxWidth={768} >
                                    {
                                        (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null ?  <p> {currentDealerInfo.dealer_address} • {currentDealerInfo.dealer_city}, {currentDealerInfo.dealer_state}&nbsp;&nbsp;{currentDealerInfo.dealer_zip}</p> :'')
                                    }
                                    {
                                        (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null ?  <p> {currentDealerInfo.dealer_phone}</p> :'')
                                    }
                                </Responsive>                                
                                <div className="sec2_search flw">
                                    <div className="fn sec2_search_main" style={{paddingTop: '15px', paddingBottom: '25px'}}>
                                        <SearchDealerOnName />
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="text-center sec2_text flw">
                          <div className="fn">
                              <div className="button" style={{paddingBottom: '20px'}}>
                                  { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonBottom /> }
                                  <Responsive minWidth={769}>
                                  { currentDealerInfo.dealer_number != '00000' &&
                                  <a className="btn_black"
                                    onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Bottom') }
                                    href={ this.props.mainStore.dealerAppointment } target="_blank" title="">
                                    <span>
                                        <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                    </span>
                                  </a>
                                  }
                                  </Responsive>
                                  <Responsive maxWidth={768}>
                                      { currentDealerInfo.dealer_number != '00000' &&
                                      <a className="btn_black"
                                         onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Bottom') }
                                         href={ this.props.mainStore.dealerAppointment } title="">
                                    <span>
                                        <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                    </span>
                                      </a>
                                      }
                                  </Responsive>
                              </div>
                          </div>
                       </div>
                       <div className="text-center sec2_text flw">
                           <div className="fn">
                               <div className="button" style={{paddingBottom: '50px'}}>
                                   { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonQuoteBottom /> }
                                   <Responsive minWidth={769}>
                                       { currentDealerInfo.dealer_number != '00000'  &&
                                       <a className="btn_black"
                                          onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Bottom') }
                                          href={ this.props.mainStore.quoteTires }
                                          target= "_blank" title="">
                                        <span>
                                            <FormattedMessage id="quote-your-tires" defaultMessage={ STRCONSTANT.common.default.quote_tires } />
                                        </span>
                                       </a> }
                                   </Responsive>
                                   <Responsive maxWidth={768} >
                                       { currentDealerInfo.dealer_number != '00000'  &&
                                       <a className="btn_black"
                                          onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Bottom') }
                                          href={ this.props.mainStore.quoteTires }
                                          title="">
                                      <span>
                                      <FormattedMessage id="quote-your-tires" defaultMessage={ STRCONSTANT.common.default.quote_tires } />
                                      </span>
                                       </a> }
                                   </Responsive>
                               </div>
                           </div>
                       </div>
                   </div>
          </div>
      </div>  
    );
  }
}
export default typedInject('mainStore')(AuthorizeDealerBottom);
