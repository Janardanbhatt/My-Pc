import { Component } from 'react';
import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import {STRCONSTANT} from "../constant";
import Scrollchor from 'react-scrollchor';
import { Responsive} from 'semantic-ui-react';
import renderHTML from 'react-render-html';

interface Props {
    mainStore: MainStore,
}

class MobileCarousel extends Component<Props, {}> {
    displayGetaGrip = () => {

        if (this.props.mainStore.lang == 'fr')
            return renderHTML('<img width="412px" height="89px" src="img/get_a_grip_f.png" />');

        return renderHTML('<img width="348px" height="83px" src="img/get_a_grip_e.png" />');

    };

    displayTireEvent = () => {

        if (this.props.mainStore.lang == 'fr')
            return renderHTML('<img width="494px" height="213px" src="img/slide3_tire_event_fr.png" />');

        return renderHTML('<img width="441px" height="200px" src="img/slide3_tire_event_en.png" />');

    };

render() {
  return (

      <Carousel
          prevIcon={<span style={{position: 'absolute'}}></span>}
          nextIcon={<span style={{position: 'absolute'}}></span>}
          interval={10000} >

          { (this.props.mainStore.checkCarouselSlide == 1 &&
              <Carousel.Item>
                  <div className="item slide1_mobile item1">
                      <div className="main">
                          <div className="item_text">
                              <div className="only_mobile_414_below" >
                              <h2>
                                  <FormattedMessage id="slide1-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide1_p1_h2 } />
                              </h2>
                                  <Responsive maxWidth={450}>
                                      <FormattedMessage id="slide1-p1-a" defaultMessage={ STRCONSTANT.slides.default.slide1_p1_a } />
                                  </Responsive>
                                  <Responsive minWidth={451}>
                                   <FormattedMessage id="slide1-p1-a" defaultMessage={ STRCONSTANT.slides.default.slide1_p1_a } />
                                   <FormattedMessage id="slide1-p1-b" defaultMessage={ STRCONSTANT.slides.default.slide1_p1_b } />
                                  </Responsive>
                                  <Scrollchor
                                      to="#authorized-dealer" className="scroll-nav"
                                      animate={{offset: -95, duration: 600}}>
                                      <img src="img/scroll_arrow1.png" alt=""/>
                                  </Scrollchor>
                              </div>
                          </div>
                      </div>
                  </div>
              </Carousel.Item>)}

          { (this.props.mainStore.checkCarouselSlide == 2 &&
                  <Carousel.Item>
                      <div className="item slide2_mobile item1">
                          <div className="main">
                              <div className="item_text">
                                  <div className="only_mobile_414_below">
                                      <h2>
                                          <FormattedMessage id="slide2-p1-h2"
                                                            defaultMessage={STRCONSTANT.slides.default.slide2_p1_h2}/>
                                      </h2>

                                      <Responsive maxWidth={450}>
                                          <FormattedMessage id="slide2-p1-c"
                                                            defaultMessage={STRCONSTANT.slides.default.slide2_p1_c}/>
                                      </Responsive>
                                      <Responsive minWidth={451}>
                                          <FormattedMessage id="slide2-p1-a"
                                                            defaultMessage={STRCONSTANT.slides.default.slide2_p1_a}/>
                                          <FormattedMessage id="slide2-p1-b"
                                                            defaultMessage={STRCONSTANT.slides.default.slide2_p1_b}/>
                                      </Responsive>

                                      <Scrollchor
                                          to="#authorized-dealer" className="scroll-nav"
                                          animate={{offset: -95, duration: 600}}>
                                          <img src="img/scroll_arrow1.png" alt=""/>
                                      </Scrollchor>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>)}

          { (this.props.mainStore.checkCarouselSlide == 3 &&
                  <Carousel.Item>
                      <div className={ (this.props.mainStore.lang == 'fr') ? "item slide3_mobile_fr item1" : "item slide3_mobile item1" }>
                          <div className="main">
                              <div className="item_text_image">
                                  {this.displayTireEvent()}
                              </div>
                              <div className="item_text">
                                  <div className="only_mobile_414_below">
                                      <h2>
                                          <FormattedMessage id="slide3-p1-h2"
                                                            defaultMessage={STRCONSTANT.slides.default.slide3_p1_h2 }/>
                                      </h2>
                                      <p>
                                          <Responsive minWidth={451}>
                                          <FormattedMessage id="slide3-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide3_p1_a } />
                                          </Responsive>
                                          <Responsive maxWidth={450}>
                                              <FormattedMessage id="slide3-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide3_p1_b } />
                                          </Responsive>
                                      </p>
                                      <Scrollchor
                                          to="#authorized-dealer" className="scroll-nav"
                                          animate={{offset: -95, duration: 600}}>
                                          <img src="img/scroll_arrow1.png" alt=""/>
                                      </Scrollchor>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>)}

          <Carousel.Item>
              <div className={ (this.props.mainStore.lang == 'fr') ? "item slide4_mobile_fr item1" : "item slide4_mobile item1" }>
                  <div className="main">
                      <div style={{width: '100%', textAlign: 'center'}}>
                      <div className="item_text_image">
                          {this.displayTireEvent()}
                      </div>
                      </div>
                      <div className="item_text">
                          <div className="only_mobile_414_below" >
                              <h2>
                                  <FormattedMessage id="slide4-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide4_p1_h2 } />
                              </h2>
                              </div>
                                 <p>
                                     <Responsive minWidth={451}>
                                      <FormattedMessage id="slide4-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide4_p1_a } />
                                     </Responsive>
                                     <Responsive maxWidth={450}>
                                         <FormattedMessage id="slide4-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide4_p1_b } />
                                     </Responsive>
                                  </p>
                              <Scrollchor
                                  to="#theexperts" className="scroll-nav"
                                  animate={{offset: -130, duration: 600}}>
                                  <img src="img/scroll_arrow1.png" alt=""/>
                              </Scrollchor>
                      </div>
                  </div>
              </div>
          </Carousel.Item>

          <Carousel.Item>
              <div className="item slide5_mobile item1" style={{backgroundColor: 'black'}}>
                  <div className="main">
                      <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text" } >
                          <div className="only_mobile_414_below" >
                          <h2>
                              <FormattedMessage id="slide5-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide5_p1_h2 } />
                          </h2>
                          <p>
                              <Responsive minWidth={451}>
                              <FormattedMessage id="slide5-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide5_p1_a } />
                              </Responsive>
                              <Responsive maxWidth={450}>
                                  <FormattedMessage id="slide5-p1-a-mobile" defaultMessage={ STRCONSTANT.slides.default.slide5_p1_b } />
                              </Responsive>

                          </p>
                          <Scrollchor
                              to="#accessories-1" className={ (this.props.mainStore.lang == 'fr') ? "scroll-nav-mobile-fr" : "scroll-nav" }
                              animate={{offset: 0, duration: 600}}>
                              <img src="img/scroll_arrow1.png" alt=""/>
                          </Scrollchor>
                          </div>
                      </div>
                  </div>
              </div>
          </Carousel.Item>

          <Carousel.Item>
              <div className="item slide6_mobile item1">
                  <div className="main">
                      <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text item_text_en" } >
                          <div className="only_mobile_414_below" >
                              <h2>
                                  <FormattedMessage id="slide6-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide6_p1_h2 } />
                              </h2>
                                 <p>
                                     <Responsive minWidth={451}>
                                     < FormattedMessage id="slide6-p1-a-mobile"  defaultMessage={STRCONSTANT.slides.default.slide6_p1_a}/>
                                     </Responsive>
                                     <Responsive maxWidth={450}>
                                         < FormattedMessage id="slide6-p1-a-mobile"  defaultMessage={STRCONSTANT.slides.default.slide6_p1_b}/>
                                     </Responsive>
                                 </p>
                          <Scrollchor
                              to="#authorized-dealer" className={ (this.props.mainStore.lang == 'fr') ? "scroll-nav-mobile-fr" : "scroll-nav" }
                              animate={{offset: -95, duration: 600}} >
                              <img src="img/scroll_arrow1.png" alt="" />
                          </Scrollchor>
                          </div>
                      </div>
                  </div>
              </div>
          </Carousel.Item>
      </Carousel>
  );

  }
}
export default typedInject('mainStore')(MobileCarousel);