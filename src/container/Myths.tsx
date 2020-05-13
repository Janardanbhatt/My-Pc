import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import styled from 'styled-components';
// import { Header } from 'semantic-ui-react';
//import { STRCONSTANT } from '../constant';
//import { FormattedMessage } from 'react-intl';
import { Responsive} from 'semantic-ui-react';

const StyledMythsComponent = styled.div`
.wrapper {
    padding-left: 200px;
    padding-right: 200px;
    overflow:hidden;
}

.wrapper div {
    min-height: 100px;
}

`;


interface Props {
  mainStore: MainStore;
}

@observer
class Myths extends Component<Props, {}> {
  render () {
    return (
        <StyledMythsComponent>
            <Responsive minWidth={767}>
            <div id="myths" className="section6 flw">
                { /*<div className="container">
                    <div className="row">
                        <div className="col-md-12 sec3_heading text-center" style={{minHeight: '150px'}}>
                            <h2>
                                <FormattedMessage id="myths-title" defaultMessage={ STRCONSTANT.myths.default.title } />
                            </h2>
                            <p>
                                <FormattedMessage id="myths-p1" style={ {lineHeight: '1.3'} } defaultMessage={ STRCONSTANT.myths.default.p1 } />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container sec6_inner_container text-center">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h1" defaultMessage={ STRCONSTANT.myths.default.h1 } />
                            </h4>
                            <p>
                                <FormattedMessage id="myths-p2" defaultMessage={ STRCONSTANT.myths.default.p2 } />
                            </p>
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <h4 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h2" defaultMessage={ STRCONSTANT.myths.default.h2 } />
                            </h4>
                            <p>
                                <FormattedMessage id="myths-p3" defaultMessage={ STRCONSTANT.myths.default.p3 } />
                            </p>
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <h4 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h3" defaultMessage={ STRCONSTANT.myths.default.h3 } />
                            </h4>
                            <p>
                                <FormattedMessage id="myths-p4" defaultMessage={ STRCONSTANT.myths.default.p4 } />
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h4 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h4" defaultMessage={ STRCONSTANT.myths.default.h4 } />
                            </h4>
                            <p>
                                <FormattedMessage id="myths-p5" defaultMessage={ STRCONSTANT.myths.default.p5 } />
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            </Responsive>
            <Responsive maxWidth={767}>
                <div id="myths" className="section6 flw">
                    {/*<div className="container">
                        <div className="row text-center">
                            <div className="col-md-12 sec3_heading text-center">
                                <h2>
                                    <FormattedMessage id="myths-title" defaultMessage={ STRCONSTANT.myths.default.title } />
                                </h2>
                                <p>
                                    <FormattedMessage id="myths-p1" defaultMessage={ STRCONSTANT.myths.default.p1 } />
                                </p>
                            </div>
                        </div>
                        <div className="row text-center" style={{paddingBottom: '20px'}}>

                            <h3 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h1" defaultMessage={ STRCONSTANT.myths.default.h1 } />
                            </h3>
                            <p>
                                <FormattedMessage id="myths-p2" defaultMessage={ STRCONSTANT.myths.default.p2 } />
                            </p>
                            <br />

                            <h3 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h3" defaultMessage={ STRCONSTANT.myths.default.h3 } />
                            </h3>
                            <p>
                                <FormattedMessage id="myths-p4" defaultMessage={ STRCONSTANT.myths.default.p4 } />
                            </p>

                        </div>
                        <div className="row text-center">

                            <h3 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h2" defaultMessage={ STRCONSTANT.myths.default.h2 } />
                            </h3>
                            <p>
                                <FormattedMessage id="myths-p3" defaultMessage={ STRCONSTANT.myths.default.p3 } />
                            </p>
                            <br />

                            <h3 style={{fontWeight: 'bold'}}>
                                <FormattedMessage id="myths-h4" defaultMessage={ STRCONSTANT.myths.default.h4 } />
                            </h3>
                            <p>
                                <FormattedMessage id="myths-p5" defaultMessage={ STRCONSTANT.myths.default.p5 } />
                            </p>


                        </div>
                    </div>*/}

                </div>
            </Responsive>
        </StyledMythsComponent>
    );
  }
}
export default typedInject('mainStore')(Myths);
