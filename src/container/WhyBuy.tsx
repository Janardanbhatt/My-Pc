import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/rootStore';
import { MainStore } from '../stores/mainStore';
import styled from "styled-components";
import { Responsive } from 'semantic-ui-react';

import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledWhybuyComponent = styled.div`
`

interface Props {
  mainStore: MainStore;
}

@observer
class WhyBuy extends Component<Props, {}> {
  render () {
      return (
        <StyledWhybuyComponent>
        <Responsive minWidth={769}>
            <div id="ourpassions" className="section4 flw" style={{backgroundPosition: 'left'}}>
                <div className="main">
                    <div className="sec4_text flw">
                        <h2 style={{width: '300px', color: '#000', float: 'right', paddingTop: '20px'}}>
                            <FormattedMessage id="common-our-passion-your-mazda" defaultMessage={ STRCONSTANT.common.default.passion_for_your_mazda } />
                        </h2>
                    </div>
                </div>
            </div>
        </Responsive>
        <Responsive maxWidth={768}>
      <div id="whybuy" className="section4_mobile flw" style={{padding: '30px 0px 220px', backgroundPosition: 'left'}}>
              <div className="main">
                  <div className="sec4_text flw">
                      <h2 style = {{width: '200px', float: 'right', paddingTop: '20px', fontSize: '18px'}}>
                          <FormattedMessage id="common-our-passion-your-mazda" defaultMessage={ STRCONSTANT.common.default.passion_for_your_mazda } />
                      </h2>

                  </div>
              </div>
          </div>
        </Responsive>
        </StyledWhybuyComponent>
    );
  }
}
export default typedInject('mainStore')(WhyBuy);
