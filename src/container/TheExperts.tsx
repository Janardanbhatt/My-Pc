import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import SearchDealerOnButtonMiddle from '../components/SearchDealerOnButtonMiddle';
import { Responsive} from 'semantic-ui-react';

interface Props {
  mainStore: MainStore;
}

@observer
class TheExperts extends Component<Props, {}> {

  render () {
    const { currentDealerInfo } = this.props.mainStore;

    return (
      <div id="theexperts" className="section5 flw">
          <div className="main text-center-padding">
              <h2>
                  <FormattedMessage id="the-experts-title"
                   defaultMessage={ STRCONSTANT.TheExperts.default.title } />
              </h2>
              <p>
                  <FormattedMessage id="the-experts-achieve-peak-or-a"
                   defaultMessage={ STRCONSTANT.TheExperts.default.achieve_peak_or_a } />
                   {currentDealerInfo.dealer_name}
                  <FormattedMessage id="the-experts-achieve-peak-or-b"
                                    defaultMessage={ STRCONSTANT.TheExperts.default.achieve_peak_or_b } />
              </p>
          </div>
          <div className="text-center sec2_text flw">
              <div className="fn">
                  <div className="button">
                      { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonMiddle /> }
                      { /*currentDealerInfo.dealer_number === '00000' && <SearchDealerOnButtonSeeOffers /> */}
                      <Responsive minWidth={769}>
                          { currentDealerInfo.dealer_number != '00000'  &&
                          <a className="btn_black"
                             onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Middle') }
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
                             onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Middle') }
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
    </div>
    );
  }
}
export default typedInject('mainStore')(TheExperts);
