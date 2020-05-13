import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import styled from 'styled-components';
import {Grid, Segment, Divider} from 'semantic-ui-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid';
import Scrollchor from 'react-scrollchor';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import SearchDealerOnStickyButton from "../components/SearchDealerOnStickyButton";

const StyleMobileMenuComponent = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed !important;
  z-index: 20;
  width: auto;
    ul {
    list-style: none;
    text-align: center;
    width: 100%;
    background-color: #FFF;
    margin-top: 0px;
    padding-bottom: 10px;
    border-bottom: 0px;
    text-transform: uppercase;
  }
  li a {
    color: #4d4d4d;
    font-size: 16px;
  }
  li a span {
    color: #4d4d4d; 
  }
`;

interface Props {
  mainStore: MainStore;
}

@observer
class MobileMenu extends Component<Props, {}> {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }
  dropDown = (lang, switchLanguage, isDealerInfoAvailable) => {
    return (
        <div className="head_padding flw" style={{padding: '0'}}>
            <div className="main">
                <div className="main_header flw">
        <ul style={{display: 'block'}}>
            <li>
            <a style={{verticalAlign: 'middle', paddingTop: '20px'}} onClick={ () => switchLanguage() }>
                    { <FormattedMessage id="common-lang-3" defaultMessage={ STRCONSTANT.common.default.lang_3 } /> } /
                    { <FormattedMessage id="common-lang-4" defaultMessage={ STRCONSTANT.common.default.lang_4 } /> }
            </a>
        </li>
            <Divider />
        <li onClickCapture={this.toggle} onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Offers")} >
        <Scrollchor
            to="#offers"
            beforeAnimate={()=>this.props.mainStore.heroSectionAnimate()}
            animate={{offset: 0, duration: 600}}>
          <a><FormattedMessage
            id="top-nav-offers"
            defaultMessage={ STRCONSTANT.topNav.default.offers } /></a>
            </Scrollchor>
        </li>
        <Divider />
        <li onClickCapture={this.toggle} onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - brakes")} >
        <Scrollchor
           to="#benifits-of-mazda-brake"
           beforeAnimate={()=>this.props.mainStore.benifits_of_mazda_brake()}
           animate={{offset: 0, duration: 600}} >
          <a><FormattedMessage
            id="top-nav-brakes"
            defaultMessage={ STRCONSTANT.topNav.default.top_brakes } /></a>
            </Scrollchor>
        </li>
        <Divider />
        <li onClickCapture={this.toggle} onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Accessories")}>
          <Scrollchor 
             to="#accessories-1"
             beforeAnimate={()=>this.props.mainStore.genuine_mazda_accessories()}
             animate={{offset: 0, duration: 2000}}
          >
          <FormattedMessage
            id="top-nav-accessories"
            defaultMessage={ STRCONSTANT.topNav.default.accessories }
          />
          </Scrollchor>
        </li>                
        <Divider />
        <li onClickCapture={this.toggle} onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Tires")}>
          <Scrollchor 
            to="#tires-1"
            beforeAnimate={()=>this.props.mainStore.maintain_your_joy()}
            animate={{offset: 0, duration: 3000}}
          >
          <FormattedMessage
            id="top-nav-tires"
            defaultMessage={ STRCONSTANT.topNav.default.tires }
          />
          </Scrollchor>
        </li>
        
      </ul>
                </div></div>

        </div>
    );
  }
  render () {
    const { lang, switchLanguage, isDealerInfoAvailable, currentDealerInfo } = this.props.mainStore;
    return (
      <StyleMobileMenuComponent>
        <Segment className="mobile-segment" style={{backgroundColor: '#000', borderRaidus: '0'}}>
          <Grid columns={2} unstackable={true} className="mobile-grid-top" >
            <Grid.Row  style={{paddingLeft: '30px', paddingTop: '10px', paddingBottom: '15px'}}>
              <Grid.Column textAlign="left">
                <a href={ lang === "fr" ? 'https://www.mazda.ca/fr/' : 'https://www.mazda.ca'} >
                    <div className="mobile-logo"></div>
                </a>
              </Grid.Column>
              <Grid.Column textAlign="right" style={{width: '49%', paddingRight: '0px'}}>
                <div onClick={this.toggle} className="mobile-menu">
                  <span className="mobile-menu-title" style={{color: 'white', fontSize: '20px'}}>MENU </span>
                    {!this.state.visible && <FontAwesomeIcon icon={faBars} className="icon-color" style={{color: 'white', fontSize: '22px'}} size="2x" />}
                    {this.state.visible && <FontAwesomeIcon icon={faTimes} className="icon-color" style={{color: 'white', fontSize: '22px'}} size="2x" />}
                </div>
              </Grid.Column>
            </Grid.Row>
            { this.state.visible && this.dropDown(lang, switchLanguage, isDealerInfoAvailable) }
            { this.props.mainStore.showStickyScheduleButton &&
            <div style={{ zIndex: 999, position: 'relative', bottom: '-23px', width: '100%',  backgroundColor: 'grey', height: '35px !important', textAlign: 'center'}}>
                { currentDealerInfo.dealer_number != '00000' && <a onClick={ () => this.props.mainStore.trackingEventDealer('Schedule an Appointment - Top') }
                   href={ this.props.mainStore.dealerAppointment }>
                      <span>
                      <FormattedMessage id="schedule-service" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
                      </span>
                </a> }
                { currentDealerInfo.dealer_number === '00000' && <SearchDealerOnStickyButton /> }
            </div> }
          </Grid>
        </Segment>
      </StyleMobileMenuComponent>  
    );
  }
}
export default typedInject('mainStore')(MobileMenu);