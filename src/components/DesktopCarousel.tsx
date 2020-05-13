import { Component } from 'react';
import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import Scrollchor from 'react-scrollchor';
import renderHTML from 'react-render-html';

interface Props {
    mainStore: MainStore,
}


class DesktopCarousel extends Component<Props, {}> {

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
          interval={10000}>

          { (this.props.mainStore.checkCarouselSlide == 1 &&
              <Carousel.Item>
              <div className='item slide1 item1'>
                  <div className="main">
                      <div>
                         <div className="item_text_image">
                            {this.displayGetaGrip()}
                         </div>
                      </div>
                      <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text" }>
                          <h2>
                              <FormattedMessage id="slide1-p1-h2"
                                                defaultMessage={STRCONSTANT.slides.default.slide1_p1_h2}/>
                          </h2>
                          <p>
                              <FormattedMessage id="slide1-p1-a" defaultMessage={STRCONSTANT.slides.default.slide1_p1_a}/>
                              <FormattedMessage id="slide1-p1-b" defaultMessage={STRCONSTANT.slides.default.slide1_p1_b}/>
                          </p>
                          <Scrollchor
                              to="#authorized-dealer" className="scroll-nav"
                              animate={{offset: -110, duration: 600}}>
                              <img src="img/scroll_arrow1.png" alt=""/>
                          </Scrollchor>
                      </div>
                  </div>
              </div>
              </Carousel.Item>)}


          {   (this.props.mainStore.checkCarouselSlide == 2 &&
              <Carousel.Item>
              <div className="item slide2 item1">
              <div className="main">
                  <div>
                      <div className="item_text_image">
                          {this.displayGetaGrip()}
                      </div>
                  </div>
                  <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text" }>
                      <h2>
                          <FormattedMessage id="slide2-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide2_p1_h2 } />
                      </h2>
                      <p>
                          <FormattedMessage id="slide2-p1-a" defaultMessage={ STRCONSTANT.slides.default.slide2_p1_a } />
                          <FormattedMessage id="slide2-p1-b" defaultMessage={ STRCONSTANT.slides.default.slide2_p1_b } />
                          </p>
                      <Scrollchor
                          to="#authorized-dealer" className="scroll-nav"
                          animate={{offset: -110, duration: 600}} >
                          <img src="img/scroll_arrow1.png" alt="" />
                      </Scrollchor>
                  </div>
              </div>
              </div>
              </Carousel.Item>)}

          {  (this.props.mainStore.checkCarouselSlide == 3 &&
              <Carousel.Item>
              <div className={ (this.props.mainStore.lang == 'fr') ? "item slide3_fr item1" : "item slide3 item1" }>
                 <div className="item_text_image">
                    {this.displayTireEvent()}
                 </div>
                 <div className="main">
                    <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text" }>
                        <div className="item_text_right">
                        <h2>
                            <FormattedMessage id="slide3-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide3_p1_h2 } />
                        </h2>
                        <p>
                            <FormattedMessage id="slide3-p1-a" defaultMessage={ STRCONSTANT.slides.default.slide3_p1_a } />
                        </p>                        
                        </div>
                      </div>
                      <Scrollchor
                        to="#authorized-dealer" className="scroll-nav"
                        animate={{offset: -110, duration: 600}} >
                        <img src="img/scroll_arrow1.png" alt="" />
                    </Scrollchor>
                    </div>                    
              </div>
              </Carousel.Item>)}

          <Carousel.Item>
              < div className={ (this.props.mainStore.lang == 'fr') ? "item slide4_fr item1" : "item slide4 item1" }>
                  <div className="item_text_image">
                      {this.displayTireEvent()}
                  </div>
                  <div className="main">
                      <div className="item_text">
                          <div className="item_text_left">
                            <h2>
                                <FormattedMessage id="slide4-p1-h2"
                                                    defaultMessage={STRCONSTANT.slides.default.slide4_p1_h2}/>
                            </h2>
                            <p>
                                <FormattedMessage id="slide4-p1-a"
                                                    defaultMessage={STRCONSTANT.slides.default.slide4_p1_a}/>
                            </p>                          
                          </div>                                             
                     </div>
                     <Scrollchor
                        to="#authorized-dealer" className="scroll-nav"
                        animate={{offset: -130, duration: 600}}>
                        <img src="img/scroll_arrow1.png" alt=""/>
                    </Scrollchor> 
                  </div>
              </div>
          </Carousel.Item>

          <Carousel.Item>
              <div className="item slide5 item1">
                  <div className="main">
                      <div className={ (this.props.mainStore.lang == 'fr') ? "item_text item_text_fr" : "item_text" }>
                          <div className="item_text_left" style={{textAlign: "left"}}>
                              <h2>
                                  <FormattedMessage id="slide5-p1-h2"
                                                    defaultMessage={STRCONSTANT.slides.default.slide5_p1_h2}/>
                              </h2>
                              <p>
                                  <FormattedMessage id="slide5-p1-a"
                                                    defaultMessage={STRCONSTANT.slides.default.slide5_p1_a}/>
                              </p>                              
                          </div>
                      </div>
                      <Scrollchor
                            to="#authorized-dealer" className={ (this.props.mainStore.lang == 'fr') ? "scroll-nav-fr" : "scroll-nav" }
                            animate={{offset: -100, duration: 600}}>
                            <img src="img/scroll_arrow1.png" alt=""/>
                      </Scrollchor>
                  </div>
              </div>
          </Carousel.Item>

          <Carousel.Item>
              <div className="item slide6 item1">
                  <div className="main">
                      <div className="item_text">
                      <div className={(this.props.mainStore.lang == 'fr') ? 'item_text1 item_text_fr' : 'item_text1'}>
                          <h2>
                              <FormattedMessage id="slide6-p1-h2" defaultMessage={ STRCONSTANT.slides.default.slide6_p1_h2 } />
                          </h2>
                          <p>
                              <FormattedMessage id="slide6-p1-a"  defaultMessage={STRCONSTANT.slides.default.slide6_p1_a}/>
                          </p>                          
                      </div>
                    </div>
                    <Scrollchor
                        to="#authorized-dealer" className={ (this.props.mainStore.lang == 'fr') ? "scroll-nav-fr" : "scroll-nav" }
                        animate={{offset: -110, duration: 600}} >
                        <img src="img/scroll_arrow1.png" alt="" />
                    </Scrollchor>
                  </div>
              </div>
          </Carousel.Item>
      </Carousel>
  );
  }
}

export default typedInject('mainStore')(DesktopCarousel);