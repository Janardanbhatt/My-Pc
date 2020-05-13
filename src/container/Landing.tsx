import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import styled from 'styled-components';
import { Segment, Container, Header, Responsive, Image } from 'semantic-ui-react';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";

const StyledLandingComponent = styled.div`
  .bgImage {
    position: absolute;
    width: 100%;
    height: 335px;
    background: url('/img/hero-bg3.jpg');
    color: #ffffff;
    background-size: cover;
    background-position: right bottom;
    text-align: center;
  }
  .info-container {
    position: relative;
    padding-top: 10rem;
    text-align: center;
    font-family: 'InterstateMazda-Regular', Helvetica, Arial, sans-serif;
  }
  .info {
    letter-spacing: 8px;
    position: relative;
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 0;
  }
  .segment {
    padding: 0;
  }
  .mobile-image {
    width: 100%;
    position: absolute;
    height: 380px;
  }
`;
const carSrc = '/img/hero-bg3-sm.jpg';
interface Props {
  mainStore: MainStore;
}
@observer
class Landing extends Component<Props, {}> {
  render () {
    return (
      <StyledLandingComponent id="home">
        <Responsive minWidth={767}>
          <Segment basic>
            <Container fluid>
              <div className="bgImage"></div>
            </Container>
            <Container className="info-container">
              <Header as='h1' className="info">
                <FormattedMessage
                  id="mazda-recall"
                  defaultMessage={ STRCONSTANT.landing.default.mazda_recall }
                />
                <br />
                <FormattedMessage
                  id="info-center"
                  defaultMessage={ STRCONSTANT.landing.default.info_center }
                />
              </Header>
            </Container>
        </Segment>
       </Responsive>
       <Responsive maxWidth={767}>
          <Segment basic>
            <Image src={carSrc} className="mobile-image" />
            <Container className="info-container">
              <Header as='h1' className="info">
                <FormattedMessage
                  id="mazda-recall"
                  defaultMessage={ STRCONSTANT.landing.default.mazda_recall }
                />
                <br />
                <FormattedMessage
                  id="info-center"
                  defaultMessage={ STRCONSTANT.landing.default.info_center }
                />
              </Header>
            </Container>
        </Segment>
       </Responsive>
      </StyledLandingComponent>  
    );
  }
}
export default typedInject('mainStore')(Landing);
