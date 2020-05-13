import { Component } from 'react';
import * as React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledMyths = styled.div`
  white-space: pre-wrap;
`;

class MythsComponent extends Component {
  state = {
    thisState: false,
  };

  constructor(props) {
    super(props);
  }

render() {
  return (
  <StyledMyths>
    <div>
      <FormattedMessage id="myths-p1" defaultMessage={ STRCONSTANT.myths.default.p1 } />
    </div>
    <div>
      <Grid columns={2} unstackable='true'>
        <Grid.Row only='computer tablet'>
          <Grid.Column textAlign="left" >
            <Header as="h4" >
              <FormattedMessage
                id="myths-row1-hi"
                defaultMessage={ STRCONSTANT.myths.default.h1 }
              />
            </Header>
            <p>
              <FormattedMessage
                id="myths-row1-p2"
                defaultMessage={ STRCONSTANT.myths.default.p2 }
              />
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" >
              <FormattedMessage
                id="myths-row1-h2"
                defaultMessage={ STRCONSTANT.myths.default.h2 }
              />
            </Header>
            <p>
              <FormattedMessage
                id="myths-row1-p3"
                defaultMessage={ STRCONSTANT.myths.default.p3 }
              />
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only='computer tablet'>
          <Grid.Column textAlign="left" >
            <Header as="h4" >
              <FormattedMessage
                id="myths-row2-hi"
                defaultMessage={ STRCONSTANT.myths.default.h1 }
              />
            </Header>
            <p>
              <FormattedMessage
                id="myths-row2-p4"
                defaultMessage={ STRCONSTANT.myths.default.p4 }
              />
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" >
              <FormattedMessage
                id="myths-row2-h2"
                defaultMessage={ STRCONSTANT.myths.default.h2 }
              />
            </Header>
            <p>
              <FormattedMessage
                id="myths-row2-p5"
                defaultMessage={ STRCONSTANT.myths.default.p5 }
              />
            </p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </div>

  </StyledMyths>
        
  );
  }
}
export default (MythsComponent);
