// @flow
import * as React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import styled from 'styled-components';

import routes from '../constants/routes';

type Props = {
  children: React.Node
};

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 20px 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class App extends React.Component<Props> {

  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <div
            style={{
                marginLeft: this.state.expanded ? 240 : 64,
                padding: '15px 20px 0 20px'
            }}
        >
            <ButtonGroup>
                <Button btnStyle="flat">
                    Home
                </Button>
                <Button btnStyle="flat">
                    NSFW Mode
                </Button>
                <Button btnStyle="flat">
                    Shortcuts
                </Button>
                <Button btnStyle="flat">
                    Configuration
                </Button>
            </ButtonGroup>
        </div>
        <SideNav
          onToggle = {() => {
            this.setState({expanded: !this.state.expanded})
          }}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey={routes.HOME}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey={routes.MARKING}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Marking
                </NavText>
            </NavItem>
            <NavItem eventKey={routes.CASEMAKING}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Casemaking
                </NavText>
            </NavItem>
            <NavItem eventKey={routes.LEGALIZATION}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Legalization
                </NavText>
            </NavItem>
        </SideNav.Nav>
        </SideNav>
        <Main expanded={this.state.expanded}>
          { children }
        </Main>
      </React.Fragment>
    )
  }
}
