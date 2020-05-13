import { Component } from 'react';
import * as React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

const StyledNeed = styled.div`  
`;

const imgThermometer = '/img/section5_images.png';
const imgArrowRight = '/img/arrow-right.png';

class NeedComponent extends Component {
  state = {
    thisState: false,
  };

  constructor(props) {
    super(props);
  }

render() {
  return (
  <StyledNeed>
    <Grid columns={4} unstackable='true'>
      <Grid.Row only='computer tablet'>
        <Grid.Column >        
        </Grid.Column>       
        <Grid.Column >
          <Image src={imgThermometer} />
        </Grid.Column>
        <Grid.Column textAlign="left" >
          <FormattedMessage id="need-p1" defaultMessage={ STRCONSTANT.need.default.p1 } />
        </Grid.Column>
        <Grid.Column >        
        </Grid.Column>
      </Grid.Row>
  </Grid>     
  
  <div className="flw">
    <div className="button">
      <a href="#" target="" title="">
        <span className="imgin">
          <Image src={imgArrowRight} />
        </span>
        <span className="text">LEARN MORE</span>
      </a>
    </div>
  </div>

  </StyledNeed>
        
  );
  }
}
export default (NeedComponent);
