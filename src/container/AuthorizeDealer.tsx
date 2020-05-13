import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import SearchDealerOnName from '../components/SearchDealerOnName';
import SearchDealerOnButton from '../components/SearchDealerOnButton';
import SearchDealerOnButtonSeeOffers from '../components/SearchDealerOnButtonSeeOffers';
import SearchDealerOnButtonQuote from '../components/SearchDealerOnButtonQuote';
import SearchDealerOnButtonAcc from '../components/SearchDealerOnButtonAcc';

import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";
import { Responsive} from 'semantic-ui-react';

interface Props {
  mainStore: MainStore;
}

@observer
class AuthorizeDealer extends Component<Props, {}> {
  render () {
    const { currentDealerInfo } = this.props.mainStore;

    return (
      <div id="authorized-dealer" className="scetion2 flw">
         <div style={{paddingTop: '0px', marginBottom: '60px'}}>
                   <div className="main">
                       <Responsive maxWidth={768}>
                           <div className="text-center" style={{minHeight: '0px', padding: '10px'}}>
                               <div className="sec2_heading flw">
                                   {
                                       (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null  ? <h3>{ currentDealerInfo.dealer_name }</h3> : '')
                                   }
                                   {
                                       (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null  ?  <p> {currentDealerInfo.dealer_address} • {currentDealerInfo.dealer_city}, {currentDealerInfo.dealer_state}&nbsp;&nbsp;{currentDealerInfo.dealer_zip}</p> : '')
                                   }
                                   {
                                       (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null  ?  <p> {currentDealerInfo.dealer_phone}</p> : '')
                                   }
                                   <div className="sec2_search flw">
                                       <div className="fn sec2_search_main" style={{paddingTop: '15px', paddingBottom: '25px'}}>
                                           <SearchDealerOnName />
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="text-center sec2_text flw">
                               <div className="fn">
                                   <div className="button" style={{paddingTop: '0', paddingBottom: '20px'}}>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButton /> }
                                       { /*currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonSeeOffers /> */ }
                                       <Responsive minWidth={769}>
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Top') }
                                              href={ this.props.mainStore.dealerAppointment }
                                              target= "_blank" title="">
                                            <span>
                                                <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                            </span>
                                           </a> }
                                       </Responsive>
                                       <Responsive maxWidth={768} >
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Top') }
                                              href={ this.props.mainStore.dealerAppointment }
                                              title="">
                                          <span>
                                          <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                          </span>
                                           </a> }
                                       </Responsive>
                                   </div>
                               </div>
                           </div>
                           <div className="text-center sec2_text flw">
                                   <div className="fn">
                                       <div className="button" style={{ paddingBottom: '20px'}}>
                                           { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonQuote /> }
                                           <Responsive minWidth={769}>
                                               { currentDealerInfo.dealer_number != '00000'  &&
                                               <a className="btn_black"
                                                  onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Top') }
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
                                                  onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Top') }
                                                  href={ this.props.mainStore.quoteTires }
                                                  title="">
                                          <span>
                                          <FormattedMessage id="quote-your-tires" defaultMessage={ STRCONSTANT.common.default.quote_tires } />
                                          </span>
                                               </a> }
                                           </Responsive>
                                           { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonSeeOffers /> }
                                       </div>
                                   </div>
                               </div>
                           <div className="text-center sec2_text flw">
                               <div className="fn">
                                   <div className="button" style={{ paddingBottom: '20px'}}>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonAcc /> }
                                       <Responsive minWidth={769}>
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Top') }
                                              href={ this.props.mainStore.personalizeMazda }
                                              target= "_blank" title="">
                                                <span>
                                                        <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                                                </span>
                                           </a> }
                                       </Responsive>
                                       <Responsive maxWidth={768} >
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Top') }
                                              href={ this.props.mainStore.personalizeMazda }
                                              title="">
                                                <span>
                                                    <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                                                </span>
                                           </a> }
                                       </Responsive>
                                   </div>
                               </div>
                           </div>
                       </Responsive>
                       <Responsive minWidth={769}>
                           <div className="text-center" style={{minHeight: '0px', padding: '10px'}}>
                               <div className="sec2_heading flw">
                                   {
                                       (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null  ? <h1>{ currentDealerInfo.dealer_name }</h1> : '')
                                   }
                                   {
                                       (currentDealerInfo.dealer_number != '00000' && currentDealerInfo.dealer_number != null  ?  <p> {currentDealerInfo.dealer_address} • {currentDealerInfo.dealer_city}, {currentDealerInfo.dealer_state}&nbsp;&nbsp;{currentDealerInfo.dealer_zip} • {currentDealerInfo.dealer_phone}</p> :'')
                                   }
                                   <div className="sec2_search flw">
                                       {currentDealerInfo.dealer_number == '00000' && <div className="fn sec2_search_main" style={{marginTop: '40px', paddingTop: '15px', paddingBottom: '25px'}}>
                                           <SearchDealerOnName />
                                       </div> }
                                       {currentDealerInfo.dealer_number != '00000' && <div className="fn sec2_search_main" style={{marginTop: '10px', paddingTop: '15px', paddingBottom: '25px'}}>
                                           <SearchDealerOnName />
                                       </div> }
                                   </div>
                               </div>
                           </div>
                           <div className="text-center sec2_text flw">
                               <div className="fn">
                                   <div className="button" style={{paddingBottom: '20px'}}>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButton /> }
                                       <Responsive minWidth={769}>
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Top') }
                                              href={ this.props.mainStore.dealerAppointment }
                                              target= "_blank" title="">
                                        <span>
                                            <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                        </span>
                                           </a> }
                                       </Responsive>
                                       <Responsive maxWidth={768} >
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Top') }
                                              href={ this.props.mainStore.dealerAppointment }
                                              title="">
                                      <span>
                                      <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                                      </span>
                                           </a> }
                                       </Responsive>
                                   </div>
                               </div>
                           </div>
                           <div className="text-center sec2_text flw">
                               <div className="fn">
                                   <div className="button" style={{paddingBottom: '20px'}}>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonQuote /> }
                                       <Responsive minWidth={769}>
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Top') }
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
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Quote Your Tires - Top') }
                                              href={ this.props.mainStore.quoteTires }
                                              title="">
                                      <span>
                                      <FormattedMessage id="quote-your-tires" defaultMessage={ STRCONSTANT.common.default.quote_tires } />
                                      </span>
                                           </a> }
                                       </Responsive>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonSeeOffers /> }
                                   </div>
                               </div>
                           </div>
                           <div className="text-center sec2_text flw">
                               <div className="fn">
                                   <div className="button" style={{paddingBottom: '20px'}}>
                                       { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonAcc /> }
                                       <Responsive minWidth={769}>
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Top') }
                                              href={ this.props.mainStore.personalizeMazda }
                                              target= "_blank" title="">
                                                <span>
                                                        <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                                                </span>
                                           </a> }
                                       </Responsive>
                                       <Responsive maxWidth={768} >
                                           { currentDealerInfo.dealer_number != '00000'  &&
                                           <a className="btn_black"
                                              onClick={ () => this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Top') }
                                              href={ this.props.mainStore.personalizeMazda }
                                              title="">
                                                <span>
                                                    <FormattedMessage id="accessories-accessorize" defaultMessage={ STRCONSTANT.accessories.default.accessorize } />
                                                </span>
                                           </a> }
                                       </Responsive>
                                   </div>
                               </div>
                           </div>
                       </Responsive>
                   </div>
          </div>
      </div>  
    );
  }
}
export default typedInject('mainStore')(AuthorizeDealer);
