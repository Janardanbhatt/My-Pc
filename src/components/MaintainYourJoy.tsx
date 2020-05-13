import { Component } from 'react';
import * as React from 'react';
import { MainStore } from '../stores/mainStore';
import Footer from "../container/Footer";
import AuthorizeDealerBottom from "../container/AuthorizeDealerBottom";
import {typedInject} from "../stores/rootStore";
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";

interface Props {
    mainStore: MainStore,
}

class MaintainYourJoy extends Component<Props, {}>{
	render(){
		const {maintain_your_joy_fade_text} =this.props.mainStore;
		return(
		<section className={maintain_your_joy_fade_text ? "three-section-merge has-fixed z-index-1 maintain-your-joy anmiateFadeOut" :"three-section-merge has-fixed z-index-1 maintain-your-joy"} id='tires-1'>				    	    
		                    {/*<!--Common block start-->*/}
					    <section className="common-detail-block">
					       <div className="full-height d-flex align-items-center text-center">
					            <div className="container content-details">
					                <h1><FormattedMessage id='maintain_your_joy_h1' defaultMessage={ STRCONSTANT.common.default.maintain_your_joy_h1 }/></h1>
					                <p>
					                 <FormattedMessage id='maintain_your_joy_p' defaultMessage={ STRCONSTANT.common.default.maintain_your_joy_p}/>
					                </p>
					                <div className="btn-block">
					                    <a href="#" title="Schedule Appointment" className="btn_normal">SCHEDULE APPOINTMENT</a>
					                </div>
					            </div> 
					        </div>
					    </section>

					    {/*<!--Authorized dealer start-->*/}
					    <section className="authorized-dealer-block">
					        <div className="container text-center">
					                <AuthorizeDealerBottom/>
					            </div>
					    </section>
					    {/*<!--Authorized dealer End-->*/}
					    <Footer />
                  	</section>
			)
		}
}
export default typedInject('mainStore')(MaintainYourJoy);
