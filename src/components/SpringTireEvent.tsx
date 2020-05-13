import { Component } from 'react';
import * as React from 'react';
//import { Image } from 'semantic-ui-react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import AuthorizeDealer from "../container/AuthorizeDealer";
import renderHTML from 'react-render-html';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPrint} from '@fortawesome/fontawesome-free-solid';

/*const coupon_tires_icon='img/coupon_tires_icon.png'
const car_repair_logo='img/car_repair_logo.png'*/
//const spring_tire_event='img/spring_tire_event.png'
const scroll_panel_second_bg='img/scroll_panel_second_bg.jpg'
const scroll_panel_second_bg_tablet='img/scroll_panel_second_bg_tablet.jpg'
const scroll_panel_second_bg_mob='img/scroll_panel_second_bg_mob.jpg'

interface Props {
    mainStore: MainStore,
}

class SpringTireEvent extends Component<Props, {}> {
	constructor(props) {
   		 super(props)
 	 }

	  getOfferID = (offerid) => {
	      try {
	          this.props.mainStore.setOfferID(offerid);
	          this.props.mainStore.printOffers();
	      }catch(e) {
	          console.log(e.toString());
	      }
  	};

	 displaySpringTireImageText = () => {
        if (this.props.mainStore.lang == 'fr')
            return renderHTML('<img src="img/spring_tire_event_french.png" />');

        	return renderHTML('<img src="img/spring_tire_event.png" />');

    };

      getCouponIcon = (couponcode) => {

        var couponImage = 'img/CouponIcon_Tires.png';

        switch(couponcode) {
            case 'C01':
              couponImage = 'img/couponicon_fall2019_healthcheck.png';
              break;
            case 'D02':
              couponImage = 'img/couponicon_fall2019_pickup.png';
              break;
            case 'F03':
              couponImage = 'img/couponicon_fall2019_fall.png';
              break; 
            case 'J02':
              couponImage = 'img/CouponIcon_Brakes.png';
              break;
            case 'GAG':
            case 'I02':
            case 'J04':
            case 'J10':
            case 'J10B':
            case 'J12':
            case 'J13':
              couponImage = 'img/CouponIcon_Tires.png';
              break;
            case 'N02':
              couponImage = 'img/CouponIcon_Battery.png';
              break;    
            case 'Q02':
              couponImage = 'img/couponicon_fall2019_accessories.png';
              break; 
            case 'Y01':
              couponImage = 'img/CouponIcon_Service.png';
              break;
			case 'Q02B':
				couponImage = 'img/CouponIcon_Safety.png'                  
        }

        return couponImage;
    };


    renderOffers = (offer, lang, index) => {
    	//console.log(offer,index);
    	//alert();
             return (
               		 <section className="get-up-block">
					        <div className="container text-center">
					            { (index % 2) == 0 && <div className="get-up-off">
					            	<img src={this.getCouponIcon(offer.offer_code)} />  
					                <h2>{renderHTML(offer.offer_title)}</h2>
					                <div className="border-top-bottom">
					                    <h2>{renderHTML(offer.offer_detail_03)}</h2>
					                </div>
					                <span>
					                   {renderHTML(offer.offer_detail_01)}
					                  </span>
					                    <span><p>
					                      {renderHTML(offer.offer_detail_05)}
					                    </p></span>
					        </div>}
					        { (index % 2) != 0 && <div className="get-up-off">
					                <img src={this.getCouponIcon(offer.offer_code)} />  
					                <h2>{renderHTML(offer.offer_title)}</h2>

					                <div className="border-top-bottom">
					                <h2>{renderHTML(offer.offer_detail_03)}</h2>
					                </div>
				              	  	<span>
				              	  		{renderHTML(offer.offer_detail_01)}
				              	  	</span>
				              	  	<span><p>{renderHTML(offer.offer_detail_05)}</p></span>
					     </div>}
						 <div className="print-block-cust">
							 <a id='d1' href="#/"  onClick={ () => this.getOfferID(offer.offer_id)} >
								 <FontAwesomeIcon icon={faPrint} size='xs' />
								 &nbsp;
								 <FormattedMessage id="print-offer" defaultMessage={ STRCONSTANT.common.default.print_offer } />
							 </a>
						 </div>
					    </div>
				</section>
                    
             );
  };


	render() {
		const { section_2,spring_first_fade,isDealerInfoAvailable, currentDealerOffers, nationalOffers, lang  } = this.props.mainStore;
    	var currentOffers = isDealerInfoAvailable ? currentDealerOffers : nationalOffers;


  		return (
  			<section className={section_2 ? "two-section-merge spring_tire_event has-fixed z-index-5 ani-fill-out" : "two-section-merge has-fixed z-index-5 spring_tire_event"}>
					    {/*<!--Scroll second panel start-->*/}
					    <section className="scroll-second-panel full-height">
					        <div className="second-panel-top-block">
					            <div className={spring_first_fade ? "bg_cover desktop_view content-animated" : "bg_cover desktop_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                        <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div>
					            <div className={spring_first_fade ? "bg_cover tablet_view content-animated" : "bg_cover tablet_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg_tablet+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                       <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div>
					            <div className={spring_first_fade ? "bg_cover mobile_view content-animated" : "bg_cover mobile_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg_mob+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                       <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div> 
					        </div>
					        <div className="second-panel-bottom-block">
					            <div className="container text-center">
					              { /* <div className="btn-block">*/}
					                	<AuthorizeDealer/>
					               {/* </div>*/}
					            </div>
					        </div>
					    </section>
					    {/*<!--Scroll second panel end-->*/}
					    <div id="offers">
							{ currentOffers.map((offer, index) => this.renderOffers(offer, lang, index)) }
					    </div>
					    {/*<!--Scroll second panel start-->*/}
				</section>
  		)
  		}
}
export default typedInject('mainStore')(SpringTireEvent);
