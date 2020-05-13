import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import styled from 'styled-components';
import { Container, Segment, Image, Grid, List } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyleDesktopMenuComponent = styled.div`  
  top: 0;
  left: 0;
  right: 0;
  position: fixed !important;
  z-index: 20;
  width: auto;
  background-color: #000;
  
  .thirteen.wide.nav-item {
    position: relative;
    text-align: right;
    padding-top: 64px;
    font-size:  12px; 
    font-family: 'MazdaType';
    font-weight: 400;
    letter-spacing: 2px;
  }
  .btn-dealer {
    margin-left: 3rem;
    margin-right 2rem;
    white-space: nowrap;
  }
  .btn-group {
    display: flex;
  }
  .ui.horizontal.divided.list>.item:first-child {
    border-left: none;
  }
  .ui.divided.horizontal.list>.item {
    /* border-left: 1px solid white; */
    color: #000000; 
    font-family: 'MazdaType';
    font-weight: 300;
  }
  .ui.divided.horizontal.list {
    /* margin-left: 2.2rem; */
  }
  .ui.list .list>.item a, .ui.list>.item a {
    color: #959595;
    /* padding-right: 0.7rem !important; */
    /* padding-left: 0.7rem !important; */
  }
  .ui.list .list>.item a, .ui.list>.item a:hover {
    color: #FFF;
  }

  #languageselector {
    text-align: right;
  }

  .thirteen a {
    color:white;
    font-size:12px;   
  }

  .header a span {
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    padding-right: 10px;
  }

  .header span {
    color: #fff;
  }

`;

const logo = '/img/logo-GAG.png';

interface Props {
  mainStore: MainStore;
}

@observer
class DesktopMenu extends Component<Props, {}> {
  render () {
    const {switchLanguage, lang, dealerName } = this.props.mainStore;
    return (
      <StyleDesktopMenuComponent>
      <Segment basic className="head_padding flw">
        <Container className="main" /*style={{marginTop: '10px', marginBottom: '18px', width: '96%'}}*/>
          <Grid className="main_header flw">
            <Grid.Column width={3}>
              <a href= { lang === "fr" ? 'https://www.mazda.ca/fr/' : 'https://www.mazda.ca'} title="Mazda">
                <Image className="main_logo" src={logo} />
              </a>
            </Grid.Column>
            <Grid.Column width={13} style={{textAlign: "right"}}>
              <div id="languageselector" className="top_header flw" style={{paddingTop: '0px', height: '30px', display: 'inline'}}>
                <span style={{color: "white", fontSize: '14px'}}>{dealerName}</span>
                <a style={{verticalAlign: 'top'}} onClick={ () => switchLanguage() }>
                { <FormattedMessage id="common-lang-1" defaultMessage={ STRCONSTANT.common.default.lang_1 } /> } /
                { <FormattedMessage id="common-lang-2" defaultMessage={ STRCONSTANT.common.default.lang_2 } /> }
                </a>
              </div>
              <List divided horizontal size="mini" style={{paddingTop: '15px'}}>
                <List.Item onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Offers")}>
                <List.Content>
                    <List.Header>
                      <Scrollchor 
                        to="#offers"
                        beforeAnimate={()=>this.props.mainStore.heroSectionAnimate()}
                        animate={{offset: 0, duration: 600}}
                      >
                      <FormattedMessage
                        id="top-nav-offers"
                        defaultMessage={ STRCONSTANT.topNav.default.offers }
                      />
                      </Scrollchor>
                        <span style={{fontSize: '15px' , verticalAlign: 'bottom'}}>  | </span>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - brakes")}>
                <List.Content>
                    <List.Header>
                      <Scrollchor 
                        to="#benifits-of-mazda-brake"
                        beforeAnimate={()=>this.props.mainStore.benifits_of_mazda_brake()}
                        animate={{offset: 10, duration: 600}}
                      >
                      <FormattedMessage
                        id="top-nav-brakes"
                        defaultMessage={ STRCONSTANT.topNav.default.top_brakes }
                      />
                      </Scrollchor>
                        <span style={{fontSize: '15px' , verticalAlign: 'bottom'}}>  | </span>
                    </List.Header>
                  </List.Content>
                </List.Item>                
                <List.Item onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Accessories")}>
                  <List.Content>
                    <List.Header className='top-nav-accessories'>
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
                      <span style={{fontSize: '15px' , paddingLeft: '15px', verticalAlign: 'bottom'}}>|</span>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item onClick = {() => this.props.mainStore.trackingEventDealer("TopNav - Tires")}>
                    <List.Content>
                      <List.Header>
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
                      </List.Header>
                    </List.Content>
                  </List.Item>                
              </List>
            </Grid.Column>

          </Grid>  
        </Container>
      </Segment>
    </StyleDesktopMenuComponent>  
    );
  }
}
export default typedInject('mainStore')(DesktopMenu);