import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
// import styled from 'styled-components';
// import { Image } from 'semantic-ui-react';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
// import ImportantComponent from '../components/Important';

/*
const StyledImportantComponent = styled.div`
  white-space: pre-wrap;
`;
*/

interface Props {
  mainStore: MainStore;
}

const icon1 = '/img/sec3_icon1.png';
const icon2 = '/img/sec3_icon2.png';
const icon3 = '/img/sec3_icon3.png';
const icon4 = '/img/sec3_icon4.png';
const icon5 = '/img/sec3_icon5.png';
const icon6 = '/img/sec3_icon6.png';
var icon7 = '/img/sec3_images.png';

@observer
class Important extends Component<Props, {}> {
  render () {
    icon7 = this.props.mainStore.lang == 'en' ? '/img/sec3_images.png' : '/img/sec3_images_fr.png';
    return (
          <div id="important" className="section4">
              <div className="container sec3_heading_container">
                  <div className="row">
                      <div className="col-md-12 sec3_heading text-center">
                          <h2>
                            <FormattedMessage id="important-title" defaultMessage={ STRCONSTANT.important.default.title } />
                          </h2>
                          <p>
                            <FormattedMessage id="important-p1" defaultMessage={ STRCONSTANT.important.default.p1 } />
                          </p>
                          <p>
                            <FormattedMessage id="important-p2" defaultMessage={ STRCONSTANT.important.default.p2 } />
                          </p>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                       <div className="col-sm-3 col-sm-offset-2 ">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon1} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h1" defaultMessage={ STRCONSTANT.important.default.h1 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p3" defaultMessage={ STRCONSTANT.important.default.p2 } />
                                </p>
                            </div>
                       </div>
                       <div className="col-sm-3 col-sm-offset-1">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon2} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h2" defaultMessage={ STRCONSTANT.important.default.h2 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p4" defaultMessage={ STRCONSTANT.important.default.p4 } />
                                </p>
                            </div>
                       </div>
                  </div>
                  <div className="row">     
                       <div className="col-sm-3">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon3} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h3" defaultMessage={ STRCONSTANT.important.default.h3 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p5" defaultMessage={ STRCONSTANT.important.default.p5 } />
                                </p>
                            </div>
                       </div>
                       <div className="col-sm-3 col-sm-offset-1">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon4} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h4" defaultMessage={ STRCONSTANT.important.default.h4 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p6" defaultMessage={ STRCONSTANT.important.default.p6 } />
                                </p>
                            </div>
                       </div>
                       <div className="col-sm-3 col-sm-offset-1">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon5} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h5" defaultMessage={ STRCONSTANT.important.default.h5 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p7" defaultMessage={ STRCONSTANT.important.default.p7 } />
                                </p>
                            </div>
                       </div>
                       <div className="col-sm-3 col-sm-offset-2">
                            <div className="sec3_icon_box flw text-center">
                              <img src={icon6} />
                            </div>
                            <div className="sec3_text_box flw text-center">
                                <h4>
                                    <FormattedMessage id="important-h6" defaultMessage={ STRCONSTANT.important.default.h6 } />
                                </h4>
                                <p>
                                    <FormattedMessage id="important-p8" defaultMessage={ STRCONSTANT.important.default.p8 } />
                                </p>
                            </div>
                       </div>
                       <div className="col-sm-4 col-sm-offset-1 sec3_img_block">                          
                          <img src={icon7} />
                          <p>
                            <FormattedMessage id="important-p9" defaultMessage={ STRCONSTANT.important.default.p9} />
                          </p>
                       </div>
                  </div>
              </div>
          </div>  
    );
  }
}
export default typedInject('mainStore')(Important);
