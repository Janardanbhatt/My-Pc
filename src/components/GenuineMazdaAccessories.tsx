import { Component } from 'react';
import * as React from 'react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";

const detailing_pannel_one='img/detailing_pannel_one.jpg'
const detailing_pannel_second='img/detailing_pannel_second.jpg'

interface Props {
    mainStore: MainStore,
}

class GenuineMazdaAccessories extends Component<Props, {}>{
	render(){
		const {personalizeMazda,genuine_mazda_accessories_fade_text,setParallex_independent_left,setParallex_independent_right}=this.props.mainStore;
		//console.log(genuine_mazda_accessories_fade_text,setParallex_independent_left,setParallex_independent_right)
		return(
			<section className={genuine_mazda_accessories_fade_text ? "two-section-merge has-fixed z-index-2 genuine-mazda-accessories anmiateFadeOut" : "two-section-merge has-fixed z-index-2 genuine-mazda-accessories"} id='accessories-1'>        
					    {/*<!--Common block start-->*/}
					    <section className="common-detail-block">
					       <div className="full-height d-flex align-items-center text-center">
					            <div className="container content-details">
					                <h1><FormattedMessage id='genuine_mazda_accessories_h1' defaultMessage={ STRCONSTANT.common.default.genuine_mazda_accessories_h1 }/></h1>
					                <p>
					                   <FormattedMessage id='genuine_mazda_accessories_p' defaultMessage={ STRCONSTANT.common.default.genuine_mazda_accessories_p }/>
					                </p>
					                <div className="btn-block">
					                    <a href={personalizeMazda} title="Learn More" className="btn_normal">Learn more</a>
					                </div>
					            </div>
					        </div>
					    </section>
						{/*<!--Common block end-->*/}    
						{/*<!--Two image start-->*/}
						{}
					    <section className="two-img-block">
						        <div className="d-flex">
						                <div className="left">
						                   
						                    <div className="bottom-block bg_cover parallex-2" data-type={"background"} data-speed={"3"}>
                                            	<figure style={{backgroundImage: 'url('+detailing_pannel_one+')',transform:'translateY('+setParallex_independent_left+')'}}></figure>
					                    	</div>
						                </div>
						                <div className="right">
						                <div className="bg_cover parallex-2" data-type={"background"} data-speed={"-3"}>
                                            	<figure style={{backgroundImage: 'url('+detailing_pannel_second+')',transform:'translateY('+setParallex_independent_right+')'}}></figure>
					                    	</div>
						            </div>
						        </div> 
					    </section>{/*<!--Two image end-->*/}
                      </section>  
		)
	}


}
export default typedInject('mainStore')(GenuineMazdaAccessories);