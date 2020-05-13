
import { Component } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledMoreInfo = styled.div`
  .link {
    color: #910a2d,
    text-decoration: underline,
    white-space: nowrap
  }
`;

class MoreInfo extends Component {
  
render() {
  return (
    <StyledMoreInfo>
      <p>
      <FormattedMessage id="more-info-p1" defaultMessage={ STRCONSTANT.more_info.default.p1 } />
      </p>
      <p>
        <FormattedMessage id="more-info-p2" defaultMessage={ STRCONSTANT.more_info.default.p2 } />
      </p>
      <p>
        <FormattedMessage id="more-info-p3" defaultMessage={ STRCONSTANT.more_info.default.p3 } />
      </p>
      <p>
        <FormattedMessage id="more-info-p4" defaultMessage={ STRCONSTANT.more_info.default.p4 } />
      </p>
    </StyledMoreInfo>  
  );
  }
}
export default (MoreInfo);