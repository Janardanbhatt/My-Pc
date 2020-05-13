import { Component } from 'react';
import * as React from 'react';
// import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledImportant = styled.div`
  .question {
    cursor: pointer;
    text-transform: uppercase;
    svg.svg-inline--fa.fa-w-14.fa-xs.icon-color {
      color: #2185d0;
      margin-left: 5px;
      font-size: 10px;
      margin-bottom: 2px;
    }
  }
`;

class ImportantComponent extends Component {
  state = {
    thisState: false,
  };

  constructor(props) {
    super(props);
  }

render() {
  return (
  <StyledImportant>

    <p>
      <FormattedMessage id="important-p1" defaultMessage={ STRCONSTANT.important.default.p1 } />
    </p>
    <p>
      <FormattedMessage id="important-p2" defaultMessage={ STRCONSTANT.important.default.p2 } />
    </p>

  </StyledImportant>
        
  );
  }
}
export default (ImportantComponent);
