import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { MainStore } from '../stores/mainStore';
import { typedInject } from '../stores/rootStore';
import styled from 'styled-components';
import { Modal, Button, Form, Grid, Header } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import ListDealers from '../components/ListDealers';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from 'react-intl';

interface Props {
  mainStore: MainStore,
}

const StyledSearchDealer = styled.div`
  .searchName {
    color: #959595;
    cursor: pointer;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }

  .searchIcon {
    color: gray;
  }
  .not-dealer {
    color: #910a2d;
  }
`;
const StyledError = styled.div`
  color: #910a2d;
`;


@observer
class SearchDealerOnButtonAcc extends Component<Props, {}> {

    displayPersonalize = () => {

    return (STRCONSTANT.common.default.learn_more);

  };

  render () {
    const { pcCode, listDealers, searchDealerModal, notFoundDealer, lang } = this.props.mainStore;


    return (
      <StyledSearchDealer>
        <Modal
          size="tiny"
          closeIcon
          dimmer="blurring" style={{top: '0', marginTop: '50px', height: '85%'}}
          open={ searchDealerModal }
          onClose={ () => this.props.mainStore.closeSearchDealerModal() }
          trigger={
              <a  style={{cursor:"pointer"}} className="btn_black"
                  onClick={ () => 
                    { 
                      this.props.mainStore.trackingEventDealer('Accessorize Your Mazda - Top');
                      this.props.mainStore.openSearchDealerModal('PersonalizeYourMazda');
                    } 
                  }
                  target="_blank" title="">
                  <span  id="change-your-dealer">

                      <FormattedMessage
                          id="accessories-personalize"
                          defaultMessage={ STRCONSTANT.accessories.default.personalize }
                      />
                  </span>
              </a>
          }
        >
        <Modal.Header>
          <Header as="h4">
            <FormattedMessage
              id="search-dealer-header"
              defaultMessage={ STRCONSTANT.searchDealer.default.header }
            />
          </Header>
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Grid centered>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <label>
                      <FormattedMessage
                        id="search-dealer-description"
                        defaultMessage={ STRCONSTANT.searchDealer.default.description }
                      />
                    </label>
                    <input 
                      type="text"
                      name="pcCode"
                      placeholder={ lang === 'fr' ? 'Entrez un code postal, une ville ou un nom de concessionnaire' : 'Enter a Postal Code, City, or Dealer Name'}
                      value={ pcCode }
                      onChange={e => this.props.mainStore.updatepcCode(e)} onKeyPress={ e => this.props.mainStore.enterKeySearch(e) }
                      />
                  </Form.Field>
                  { notFoundDealer && <StyledError>
                    <FormattedMessage
                      id="search-dealer-no-dealer"
                      defaultMessage={ STRCONSTANT.searchDealer.default.no_dealer }
                    />
                  </StyledError> } 
                </Form>  
              </Grid.Column>  
            </Grid>
            { !isEmpty(listDealers) && <ListDealers />}
          </Modal.Description>  
        </Modal.Content>  
        <Modal.Actions>
          <Button onClick={ () => this.props.mainStore.closeSearchDealerModal() } size="mini">
            <FormattedMessage
              id="close"
              defaultMessage={ STRCONSTANT.common.default.close }
            />        
          </Button>
          <Button style={{wordSpacing: '.5em'}} onClick={ () => this.props.mainStore.searchDealer() } size="mini">
            <FormattedMessage
              id="search-now"
              defaultMessage={ STRCONSTANT.common.default.search_now }
            />
          </Button>
        </Modal.Actions>  
        </Modal>  
      </StyledSearchDealer>  
    );
  }
}
export default typedInject('mainStore')(SearchDealerOnButtonAcc);