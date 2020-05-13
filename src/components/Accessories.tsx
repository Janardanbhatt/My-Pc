import { Component } from 'react';
import * as React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledAccessories = styled.div`  
`;

const logo = '/img/section7_imge.jpg';
const imgArrowRight = '/img/arrow-right.png';

class AccessoriesComponent extends Component {
  state = {
    thisState: false,
  };

  constructor(props) {
    super(props);
  }

render() {
  return (
  <StyledAccessories>

    <p>
      <FormattedMessage id="accessories-p1" defaultMessage={ STRCONSTANT.accessories.default.p1 } />
    </p>
    <Image src={logo} />
    <p>
      <FormattedMessage id="accessories-p2" defaultMessage={ STRCONSTANT.accessories.default.p2 } />
    </p>
    <p>
      <b>
        <FormattedMessage id="accessories-b3" defaultMessage={ STRCONSTANT.accessories.default.b3 } />
      </b>
      <FormattedMessage id="accessories-p3" defaultMessage={ STRCONSTANT.accessories.default.p3 } />
    </p>
    <p>
      <b>
        <FormattedMessage id="accessories-b4" defaultMessage={ STRCONSTANT.accessories.default.b4 } />
      </b>
      <FormattedMessage id="accessories-p4" defaultMessage={ STRCONSTANT.accessories.default.p4 } />
    </p>

    <div className="fn">
      <div className="button">
        <a href="#" target="" title="">
          <span className="imgin">
            <Image src={imgArrowRight} />
          </span>
          <span className="text">
            <FormattedMessage id="whybuy-btn" defaultMessage={ STRCONSTANT.common.default.personalize } />
          </span>
        </a>
      </div>
    </div>    

  </StyledAccessories>
        
  );
  }
}
export default (AccessoriesComponent);
