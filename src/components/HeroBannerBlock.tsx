import { Component } from 'react';
import * as React from 'react';
//import { Image } from 'semantic-ui-react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import TopNav from "../container/TopNav";
//import { STRCONSTANT } from '../constant';
//import { FormattedMessage } from 'react-intl';
import renderHTML from 'react-render-html';


//const spring_tire_event = 'img/spring_tire_event.png';
const hero_panel_first_bg = 'img/hero_panel_first_bg.jpg';
const hero_panel_first_bg_tablet = 'img/hero_panel_first_bg_tablet.jpg';
const hero_panel_first_bg_mob = 'img/hero_panel_first_bg_mob.jpg';
interface Props {
    mainStore: MainStore,
}

class HeroBannerBlock extends Component<Props, {}> {
	 displayBannerImageText = () => {
        if (this.props.mainStore.lang == 'fr')
            return renderHTML('<img src="img/spring_tire_event_french.png" />');

        return renderHTML('<img src="img/spring_tire_event.png" />');

    };
	render() {
    	const { scrollTop } = this.props.mainStore;
    	//console.log(scrollTop);
  		return (
  			<section className="hero-banner-block full-height trans-5s" style={{transform :'translateY('+scrollTop+')'}}>
  			<TopNav/>
					        <div className="bg_cover desktop_view" style={{backgroundImage:'url('+hero_panel_first_bg+')'}}>
					            <div className="container">
					                <div className="overlay-hero-logo">
					                	{this.displayBannerImageText()}
					                </div>
					            </div>
					        </div>
					        <div className="bg_cover tablet_view" style={{backgroundImage: 'url('+hero_panel_first_bg_tablet+')'}}>
					            <div className="container">
					                <div className="overlay-hero-logo">
					                	{this.displayBannerImageText()}
					                </div>
					            </div>
					        </div>
					        <div className="bg_cover mobile_view" style={{backgroundImage: 'url('+hero_panel_first_bg_mob+')'}}>
					            <div className="container">
					                <div className="overlay-hero-logo">
					                	{this.displayBannerImageText()}
					                </div>
					            </div>
					        </div>
					    </section>
  		)
  		}

}
export default typedInject('mainStore')(HeroBannerBlock);