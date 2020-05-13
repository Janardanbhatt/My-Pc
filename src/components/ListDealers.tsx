import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { MainStore } from '../stores/mainStore';
import { typedInject } from '../stores/rootStore';
import styled from 'styled-components';
import { Button, Grid, Responsive } from 'semantic-ui-react';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

interface Props {
  mainStore: MainStore
}

const StyledListDealer = styled.div`
  .dealerInfo {
    font-size: 13px;
  }

`;

@observer
class ListDealers extends Component<Props, {}> {
  renderDealerInfo(dealer, index) {
    return (
      <div key={index}>
        <Responsive minWidth={769}>
          <Grid columns={3} unstackable="true">
            <Grid.Row style={{paddingRight: '0px', paddingLeft: '15px'}}>
              <Grid.Column textAlign="right">
                <Button size="mini" onClick={ () => this.props.mainStore.updateCurrentDealer(dealer)  }>
                <FormattedMessage
                  id="select"
                  defaultMessage={ STRCONSTANT.common.default.select }
                />
                </Button>
              </Grid.Column>
              <Grid.Column className="dealerInfo">
                <div>{ dealer.dealer_name }</div>
                <div>{ dealer.dealer_city }, { dealer.dealer_state } { dealer.dealer_zip }</div>
                <div>{ dealer.dealer_phone }</div>
              </Grid.Column>
              <Grid.Column className="dealerInfo">
                <div>{ dealer.distance_in_km }</div>
              </Grid.Column>
            </Grid.Row>  
          </Grid>
        </Responsive>
        <Responsive maxWidth={768}>
          <Grid columns={2} style={{fontSize: '14px'}}>
            <Grid.Row style={{width: '100%'}}>
              <Grid.Column textAlign="right" style={{width: '50%'}}>
                <Button size="mini" onClick={ () => this.props.mainStore.updateCurrentDealer(dealer) }>
                  <FormattedMessage
                    id="select"
                    defaultMessage={ STRCONSTANT.common.default.select }
                  />
                </Button>
              </Grid.Column>
              <Grid.Column className="dealerInfo" style={{padding: '0px', width: '45%'}}>
                <div>{ dealer.dealer_name }</div>
                <div>{ dealer.dealer_city }, { dealer.dealer_state } { dealer.dealer_zip }</div>
                <div>{ dealer.dealer_phone }</div>
                <div>{ dealer.distance_in_km }</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>  
        </Responsive>
      </div>
    );
  }
  render () {
    const { listDealers } = this.props.mainStore;
    return (

      <StyledListDealer>
        { listDealers.map((data, index) => this.renderDealerInfo(data, index)) }
      </StyledListDealer>  
    );
  }
}
export default typedInject('mainStore')(ListDealers);