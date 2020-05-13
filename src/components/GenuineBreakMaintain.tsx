import { Component } from 'react';
import * as React from 'react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";

const genuine_break_maintainance='img/genuine-break-maintainance.jpg'
const genuine_break_maintainance_tablet='img/genuine-break-maintainance_tablet.jpg'
const genuine_break_maintainance_mob='img/genuine-break-maintainance_mob.jpg'

interface Props {
    mainStore: MainStore,
}

class GenuineBreakMaintain extends Component<Props, {}>{
	render(){
		const { now_relative_scrolled_bottom,section_3_transform } = this.props.mainStore;
		//console.log(now_relative_scrolled_bottom,section_3_transform);
		return(
			<section className={now_relative_scrolled_bottom ? "genuine-break-maintain animation_done_genuine_break has-fixed z-index-4 trans-5s animateIn" : "genuine-break-maintain  has-fixed z-index-4 trans-5s"} style={{transform:'translateY('+section_3_transform+')'}}>
						        <div className="bg_cover desktop_view" style={{backgroundImage: 'url('+genuine_break_maintainance+')'}}>
						           <div className=" full-height d-flex align-items-end">
						            <div className="container">
						                <h5><FormattedMessage id='genuine_break_maintain_h5' defaultMessage={ STRCONSTANT.common.default.genuine_break_maintain_h5 }/></h5>
						            </div>
						            </div>
						        </div>
						        <div className="bg_cover tablet_view" style={{backgroundImage: 'url('+genuine_break_maintainance_tablet+')'}}>
						           <div className=" full-height d-flex align-items-end">
						                <div className="container">
						                    <h5><FormattedMessage id='genuine_break_maintain_h5' defaultMessage={ STRCONSTANT.common.default.genuine_break_maintain_h5 }/></h5>
						                </div>
						            </div>
						        </div>
						        <div className="bg_cover mobile_view" style={{backgroundImage: 'url('+genuine_break_maintainance_mob+')'}}>
						           <div className=" full-height d-flex align-items-end">
						                <div className="container">
						                    <h5><FormattedMessage id='genuine_break_maintain_h5' defaultMessage={ STRCONSTANT.common.default.genuine_break_maintain_h5 }/></h5>
						                </div>
						            </div>
						        </div>
						    </section>
		)
	}
}

export default typedInject('mainStore')(GenuineBreakMaintain);