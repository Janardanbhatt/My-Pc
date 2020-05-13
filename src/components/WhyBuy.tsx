import { Component } from 'react';
import * as React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledWhyBuyWinterTires = styled.div`
  white-space: pre-wrap;  
`;

const imgArrowRight = '/img/arrow-right.png';

class WhyBuy extends Component {
  state = {
    thisState: false,
  };

  constructor(props) {
    super(props);
  }

render() {
  return (
  <StyledWhyBuyWinterTires>

    <div>
      <FormattedMessage id="whybuy-p1" defaultMessage={ STRCONSTANT.whybuy.default.p1 } />
    </div>
   
    <div className="fn">
      <div className="button">
        <a href="#" target="" title="">
          <span className="imgin">
            <Image src={imgArrowRight} />
          </span>
          <span className="text">
            <FormattedMessage id="btn-schedule-servive" defaultMessage={ STRCONSTANT.common.default.schedule_service } />
          </span>
        </a>
      </div>
    </div>

  </StyledWhyBuyWinterTires>
        
  );
  }
}
export default (WhyBuy);
