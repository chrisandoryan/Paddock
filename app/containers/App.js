// @flow
import * as React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Dock from 'react-dock'

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {

  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
      <Dock
        position='left'
        isVisible={this.state.isVisible}
        fluid={true}
         >
        <SideNav
          onSelect={(selected) => {
          }}
          onToggle={() => {
            this.setState({isVisible: !this.state.isVisible})
          }}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="koreksi">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Koreksi
                </NavText>
            </NavItem>
            <NavItem eventKey="pengesahan">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
                </NavIcon>
                <NavText>
                    Pengesahan
                </NavText>
            </NavItem>
        </SideNav.Nav>
        </SideNav>
        <div className="content">
          { children }
        </div>
      </Dock>
      </React.Fragment>
    )
  }
}
