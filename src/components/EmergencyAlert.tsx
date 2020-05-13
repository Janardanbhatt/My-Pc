import { Component } from 'react';
import * as React from 'react';
import { Header, Segment, Button, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  .textRed {
    color: red !important;
  }
`

class EmergencyAlert extends Component {
  state = {
    isModalOpen: true
  };
  handleClick = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <Segment basic>
        <Modal size='small' open={this.state.isModalOpen} dimmer closeIcon onClose={this.handleClick}>
          <Modal.Header>
            <Header as='h1' style={{color: 'red'}} textAlign="center">DO NOT DRIVE YOUR VEHICLE</Header>
          </Modal.Header>
          <Modal.Content scrolling as={ModalStyle}>
            <Modal.Description>
              <p>
                The driver side air bag inflator in your vehicle may be part of a small population of
                inflators that pose a higer risk of <span className='textRed'>explosion</span> in the event of a crash that
                causes an air bag deployment. Two inflators built at Takata on the same day as the driver
                side air bag inflator in your vehicle have <span className='textRed'>exploded</span> causing fatal injuries.
              </p>
              <Header as='h3'>Safety Risk</Header>
              <p className='textRed'>
                An inflator explosion could result in sharp metal fragments striking the driver or
                other vehicle occupants, resulting in SERIOUS INJURE OR DEATH.
              </p>
              <Header as='h3'>Remedy</Header>
              <p>
              Your Mazda dealer is authorized to replace both the driver and passenger frontal air bag 
              inflators <span className='textRed'>FREE OF CHARGE</span>. Mazda will also provide alternate transportation, 
              if needed, under this recall program. Please contact an authorized Mazda dealer to 
              further discuss and accommodate your needs.
              </p>
              <p>
                IMPORTANT: The air bag inflators in your vehicle must be replaced even if they were previously replaced under any other recall.
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleClick} color="blue">CLOSE</Button>
          </Modal.Actions>
        </Modal>
      </Segment>
    );
  }
}
export default EmergencyAlert;
