import { Component } from 'react';
import * as React from 'react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";

const accessories_first='img/accessories_first.jpg'
const accessories_second='img/accessories_second.jpg'
const accessories_third='img/accessories_third.jpg'

interface Props {
    mainStore: MainStore,
}

class BenfitsOfMazdaBrake extends Component<Props, {}>{
	render(){
		const { benifits_of_mazda_brake_fade_text, setParallex} = this.props.mainStore;
		return(
			 <section className={benifits_of_mazda_brake_fade_text ? "two-section-merge benifits-of-mazda-brake has-fixed z-index-3 anmiateFadeOut" : "two-section-merge benifits-of-mazda-brake has-fixed z-index-3"} id='benifits-of-mazda-brake'>
					   {/* <!--Common block start-->*/}
					    <section className="common-detail-block">
					       <div className="full-height d-flex align-items-center text-center">
					            <div className="container content-details">
					                <h1><FormattedMessage id='benifits_of_mazda_brake_h1' defaultMessage={ STRCONSTANT.common.default.benifits_of_mazda_brake_h1 }/></h1>
					                <p><FormattedMessage id='benifits_of_mazda_brake_p' defaultMessage={ STRCONSTANT.common.default.benifits_of_mazda_brake_p}/></p>
					                <div className="btn-block">
					                    <a href="#" title="Schedule Break Service" className="btn_normal">schedule BRAKE SERVICE</a>
					                </div>
					            </div>
					        </div>
					    </section>
					    {/*<!--Common block end-->*/}
					    
					    {/*<!--Three image start-->*/}
					    <section className="three-img-block">
					        <div className="container-fluid">
					            <div className="row">
					                <div className="left">
					                    <div className="top-block bg_cover parallex" data-type={"background"} data-speed={"3"} >
                                            <figure style={{backgroundImage: 'url('+accessories_first+')',transform:'translateY('+setParallex+')'}}></figure>
					                    </div>
					                    <div className="bottom-block bg_cover parallex" data-type={"background"} data-speed={"3"} >
                                            <figure style={{backgroundImage: 'url('+accessories_second+')',transform:'translateY('+setParallex+')'}}></figure>
					                    </div>
					                </div>
					                <div className="right">
					                    <div className="bg_cover parallex" data-type={"background"} data-speed={"3"}>
                                            <figure style={{backgroundImage: 'url('+accessories_third+')',transform:'translateY('+setParallex+')'}}></figure>
					                    </div>
					                </div>
					            </div>
					        </div> 
					    </section>
					    {/*<!--Three image end-->*/}
                    </section>
		)
	}

}

export default typedInject('mainStore')(BenfitsOfMazdaBrake);