import { Component } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Responsive } from 'semantic-ui-react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import {MainStore} from "../stores/mainStore";
import {observer} from "mobx-react";
import {typedInject} from "../stores/rootStore";

const StyledTopNavComponent = styled.div`
`

interface Props {
    mainStore: MainStore;
}

@observer
class TopNav extends Component<Props, {}> {
  render () {
    return (
      <StyledTopNavComponent>
        <Responsive maxWidth={768}>
          <MobileMenu  />
        </Responsive>
        <Responsive minWidth={769}>
          <DesktopMenu />
        </Responsive>
      </StyledTopNavComponent>  
    );
  }
}
export default  typedInject('mainStore')(TopNav);
