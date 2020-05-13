import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
//import { Responsive} from 'semantic-ui-react';
import { MainStore } from '../stores/mainStore';
//import Important from './Important';
/*import Offers from './Offers';
import Tires from './Tires';
import Accessories from './Accessories';
import AuthorizeDealer from './AuthorizeDealer';
import AuthorizeDealerBottom from './AuthorizeDealerBottom';*/
//import Myths from './Myths';
//import  DesktopCarousel  from '../components/DesktopCarousel';
import  HeroBannerBlock  from '../components/HeroBannerBlock';
import  SpringTireEvent  from '../components/SpringTireEvent';
import  GenuineBreakMaintain  from '../components/GenuineBreakMaintain';
import  BenifitsOfMazdaBrake  from '../components/BenifitsOfMazdaBrake';
import  GenuineMazdaAccessories  from '../components/GenuineMazdaAccessories';
import  MaintainYourJoy  from '../components/MaintainYourJoy';
//import  MobileCarousel  from '../components/MobileCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { typedInject } from '../stores/rootStore';

// const StyledMainContainerComponent = styled.div``;
interface Props {
  mainStore: MainStore;
}
@observer
class MainContainer extends Component<Props, {}> {       
  render () {
    //const {currentDealerOffers,isDealerInfoAvailable,nationalOffers,lang}=this.props.mainStore;
   // console.log(currentDealerOffers,isDealerInfoAvailable,nationalOffers,lang);
    //const { } = this.props.mainStore;
    const {scrollTop,section_3_transform,setParallex,setParallex_independent_left,setParallex_independent_right,genuine_mazda_accessories_fade_text} = this.props.mainStore;
    console.log(scrollTop,section_3_transform,setParallex,setParallex_independent_left,setParallex_independent_right,genuine_mazda_accessories_fade_text);
    return (    
      <div>        
        <HeroBannerBlock/>        
        <SpringTireEvent/>
        <GenuineBreakMaintain/>
        <BenifitsOfMazdaBrake/>
        <GenuineMazdaAccessories/>
        <MaintainYourJoy/>
      </div>
    );
  }
}
export default typedInject('mainStore')(MainContainer);