import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
// import styled from 'styled-components';
// import { Image } from 'semantic-ui-react';
//import { STRCONSTANT } from '../constant';
//import { FormattedMessage } from 'react-intl';
// import NeedComponent from '../components/Need';

/*
const StyledNeedComponent = styled.div`
`;
*/

// const imgArrowRight = '/img/arrow-right.png';

interface Props {
  mainStore: MainStore;
}

@observer
class Need extends Component<Props, {}> {
  render () {
    return (
      <div id="theexperts" className="section5 flw">
          <div className="main">
              <h2>Bring your Mazda to the experts.</h2>
              <ul className="flw">
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon1.png" alt="" /></div>
                      <p>Achieve Peak <br />Operation&amp; Reliability</p>
                  </li>
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon2.png" alt="" /></div>
                      <p>Optimize <br />Fuel Efficiency</p>
                  </li>
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon3.png" alt="" /></div>
                      <p>Maintain <br />Your Warranty</p>
                  </li>
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon4.png" alt="" /></div>
                      <p>Head Off<br /> Repairs</p>
                  </li>
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon5.png" alt="" /></div>
                      <p>Extend the Life <br />of Your Vehicle</p>
                  </li>
                  <li>
                      <div className="sec5_img"><img src="img/sec5_icon6.png" alt="" /></div>
                      <p>Protect <br />Resale Value</p>
                  </li>
              </ul>
          </div>
          {/*<div className="row">
               <div className="col-sm-5 text-center sec5_left_img">
               <img src={ this.props.mainStore.lang == 'en' ? '/img/section5_images.png' : '/img/section5_images_fr.png'} />
               </div>
               <div className="col-md-7 sec3_heading text-left">
                  <h2>
                    <FormattedMessage id="need-title" defaultMessage={ STRCONSTANT.need.default.title } />
                  </h2>
                  <p>
                    <FormattedMessage id="need-p1" defaultMessage={ STRCONSTANT.need.default.p1 } />
                  </p>
              </div>
          </div>*/}

  </div>
    );
  }
}
export default typedInject('mainStore')(Need);
