import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPrint} from '@fortawesome/fontawesome-free-solid';
import renderHTML from 'react-render-html';
import styled from "styled-components";
import { Responsive, Divider} from 'semantic-ui-react';

//import SearchDealerOnLink from '../components/SearchDealerOnLink';
//import SearchDealerOnLinkTwo from '../components/SearchDealerOnLinkTwo';


const StyledOffers = styled.div`
.wrapper { 
  background-color: #f3f3f3;
  text-align: center;
  display: inline;
}

.wrapper div {
   min-height: 200px;
   padding: 10px;
}
.one {
  float:right; 
  padding-left: 10%;
  padding-right: 10%;
}
.two { 
  float: left;
  padding-top: 0px;
  overflow:hidden;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 10px;
}

.with_border {
    border-left: 2px solid #d5d5d5;

}

.main_style {
    float: 'left';
    width: '50%'; 
    text-align: 'center'; 

}

`;


interface Props {
  mainStore: MainStore;
}

@observer
class Offers extends Component<Props, {}> {

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

    getCouponIcon = (couponcode) => {

        var couponImage = 'img/couponicon_fall2019_tire.png';

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
              couponImage = 'img/couponicon_fall2019_brake.png';
              break;
            case 'GAG':
            case 'I02':
            case 'J04':
            case 'J10':
            case 'J10B':
            case 'J12':
            case 'J13':
              couponImage = 'img/couponicon_fall2019_tire.png';
              break;
            case 'N02':
              couponImage = 'img/couponicon_fall2019_battery.png';
              break;    
            case 'Q02':
              couponImage = 'img/couponicon_fall2019_accessories.png';
              break; 
            case 'Y01':
              couponImage = 'img/couponicon_fall2019_service.png';
              break;                  
        }

        return couponImage;
    };

  renderOffers = (offer, lang, index) => {
    console.log(renderHTML(offer.offer_title));

             return (
                 <div id="offers" className={(index % 2) == 0 ? 'main' : 'main with_border'}
                      style={{position: 'relative', float: 'left',  width: '50%', textAlign: 'center', }} >
                     <div className='flw'>
                     { (index % 2) == 0 && <div className = {(index % 2) == 0 ? 'one' : 'two'}
                         style={{textAlign: 'center', marginTop: '2em', marginBottom: '2rem'}}>
                         <div>
                             <h2 style={{fontSize: '26px'}}>{renderHTML(offer.offer_title)}</h2>
                         </div>
                         <div className="fn flw" style={{paddingTop: '10px'}} >
                             <p style={{fontSize: '22px', paddingTop: '20px'}}>{renderHTML(offer.offer_detail_01)}</p>
                             <p style={{fontSize: '24px'}}>{renderHTML(offer.offer_detail_03)}</p>
                         </div>
                         </div>
                     }
                     { (index % 2) != 0 && <div className = {(index % 2) == 0 ? 'one' : 'two'}
                            style={{textAlign: 'center', marginTop: '2em', marginBottom: '2rem'}}>
                            <div style={{display: 'inline-block' }}>
                                <img style={{display:'inline-block', marginTop: '-10px', paddingLeft: '15px', paddingRight: '10px', height: '70px' }} src= {this.getCouponIcon(offer.offer_code)} />
                                <h2 style={{width:'50%', display:'inline-block', fontSize: '26px', textAlign: 'left', margin: '0px', padding: '0px'}}>{renderHTML(offer.offer_title)}</h2>
                            </div>
                            <div className="fn flw" style={{paddingTop: '10px'}} >                                
                                <h2 style={{ fontSize: '26px'}}>{renderHTML(offer.offer_detail_01)}</h2>
                                <p style={{fontSize: '20px'}}>{renderHTML(offer.offer_detail_03)}</p>
                                <h6 style={{fontSize: '13px'}}>{offer.offer_detail_05}</h6>
                             </div>
                         </div>
                     }
                     </div>
                     <div className="flw" style={{textAlign: 'center', position: 'absolute', bottom: '-10px'}}>
                         <a id='d1' href="#/" style={{letterSpacing: '2px', textTransform: 'uppercase', color: '#101010', fontWeight: 700, fontSize: '18px'}} onClick={ () => this.getOfferID(offer.offer_id)} >
                             <FontAwesomeIcon icon={faPrint} size='xs' />
                             &nbsp;
                             <FormattedMessage id="print-offer" defaultMessage={ STRCONSTANT.common.default.print_offer } />
                         </a>
                     </div>
                 </div>
             );
  };

  renderMobileOffers = (offer, lang, index) => {

            return (
                <div id="offers" style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px' }}>
                    <div className="text-center">
                        { (index % 2) == 1 && <div className="offer-block" style={{display: 'inline-block' }}>
                            <img style={{paddingLeft: '20px', paddingRight: '10px', height: '70px'}} src= {this.getCouponIcon(offer.offer_code)} />
                            { (index % 2) != 0 && <h2 style={{letterSpacing: '1.2px', margin: '0px', padding: '0px', paddingTop: '0px' }}>{renderHTML(offer.offer_title)}</h2> }
                        </div> }
                            { (index % 2) == 0 && <h2 style={{fontSize: '30px', letterSpacing: '1.6px'}}>{renderHTML(offer.offer_title)}</h2> }
                            { (index % 2) == 0 && <p style={{paddingTop: '20px'}}>{renderHTML(offer.offer_detail_01)}</p> }
                            { (index % 2) == 1 && <p style={{fontSize: '30px', paddingTop: '20px'}}>{renderHTML(offer.offer_detail_01)}</p> }
                            <p style={{fontSize: '20px', letterSpacing: '1px'}}>{renderHTML(offer.offer_detail_03)}</p>
                            { (index % 2) == 1 &&<h6 style={{fontSize: '13px'}}>{offer.offer_detail_05}</h6> }
                                <a title="PRINT OFFER"
                                   style={{letterSpacing: '2px', textTransform: 'uppercase', padding: '10px', color: '#101010', fontWeight: 700, fontSize: '14px'}}
                                   href="#/" onClick={ () => this.getOfferID(offer.offer_id) } >
                                    <FontAwesomeIcon icon={faPrint} size='xs' />
                                    &nbsp;
                                    <FormattedMessage id="print-offer" defaultMessage={ STRCONSTANT.common.default.print_offer } />
                                </a>
                    </div>
                    { (index % 2) == 0 && <div style={{paddingTop: '20px'}}><Divider /></div> }
                </div>
                    );
    };

  render () {
    const {isDealerInfoAvailable, currentDealerOffers, nationalOffers, lang } = this.props.mainStore;

    var currentOffers = isDealerInfoAvailable ? currentDealerOffers : nationalOffers;
    console.log(currentOffers);
    return (
        <StyledOffers>
            <Responsive minWidth={769}>
            <div className="section3 flw" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                { currentOffers.map((offer, index) => this.renderOffers(offer, lang, index)) }
            </div>
        </Responsive>
            <Responsive maxWidth={768}>
                    <div className="section3 flw">
                    <div className="main">
                { currentOffers.map((offer, index) => this.renderMobileOffers(offer, lang, index)) }
                    </div>
                    </div>
            </Responsive>
        </StyledOffers>);
    }
}
export default typedInject('mainStore')(Offers);