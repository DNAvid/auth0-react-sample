var Radium = require('radium');
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, ButtonToolbar, Button, ResponsiveEmbed } from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import AuthService from 'utils/AuthService'
import styles from './styles.module'
import UserCount from '../../../containers/UserCount/UserCount'
import SocialShareButtons from '../../../containers/ShareButtons/ShareButtons'
import FeaturesGridLogin from '../../../containers/FeaturesGridLogin/FeaturesGridLogin' 

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <Navbar fixedTop style={styles.navbarStyle}>
          <Navbar.Header style={styles.headerStyle} >
            <Navbar.Brand>
              <a href="#">
                <img style={styles.brandStyle} src="https://storage.googleapis.com/dnavid/logoDNAvIDWhite.png" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem  target="_blank" eventKey={2} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Forum</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://medium.com/@davidweisss/f0e47e6c1173" ><span style={{color:'white'}}>Blog</span></NavItem>
              <NavItem  eventKey={3} ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron style={styles.jumbotronStyle}>
          <div style={styles.root}>
            <h1 style={styles.title} > Discuss, share, and use our DNA information </h1>
            <h2 style={styles.subtitle} > For our own benefit and under our own terms </h2>
          <div style={{width: 'auto', height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TliA5fpGxgc" frameborder="0" allowfullscreen></iframe>
              </ResponsiveEmbed>
          </div>
            <ButtonToolbar style={styles.toolbar}>
              <Button style={styles.buttonPrimary} lock bsSize="large" bsStyle="primary" onClick={auth.login.bind(this)}>Join</Button>
            </ButtonToolbar>
            <p>
              <UserCount/> Humans and counting
            </p>
            <p>
              <a href="http://bb.dnavid.com/t/what-can-you-do-with-my-dna-information" target="_blank">
               Terms of use for my DNA information
              </a>
            </p>
            <div style={{width:'100%', textAlign:'center'}}>
              <span>Help others join by sharing with family, friends, and colleagues! The more we are, the better for all. </span> 
              <SocialShareButtons/>
            </div>
          </div>
        </Jumbotron>
        <FeaturesGridLogin />
      </div>
    )
  }
}

export default Radium(Login);
