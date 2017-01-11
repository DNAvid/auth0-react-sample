var Radium = require('radium');
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, ButtonToolbar, Button, ResponsiveEmbed } from 'react-bootstrap'
import React, { PropTypes as T } from 'react'
import AuthService from 'utils/AuthService'
import styles from './styles.module'
import UserCount from '../../../containers/UserCount/UserCount'
import SocialShareButtons from '../../../containers/ShareButtons/ShareButtons'
import FeaturesGridLogin from '../../../containers/FeaturesGridLogin/FeaturesGridLogin' 
import FooterLogin from '../../../containers/FooterLogin/FooterLogin.js' 

export class Login extends React.Component {
  // These are checks
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }


  render() {
    // See trick in Container.js to pass auth as props. 
    // Why not use the normal way of passing props??
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
              <NavItem  target="_blank" eventKey={1} href="http://bb.dnavid.com" ><span style={{color:'white'}}>Engage</span></NavItem>
              <NavItem  target="_blank" eventKey={2} href="https://blog.dnavid.com" ><span style={{color:'white'}}>Blog</span></NavItem>
              <NavItem  target="_blank" eventKey={3} href="http://bb.dnavid.com/t/faq-frequently-asked-questions/46" ><span style={{color:'white'}}>FAQ</span></NavItem>
              {/* Binds login functions to keep this context
                  https://auth0.com/docs/quickstart/spa/react/01-login
                */} 
              <NavItem  eventKey={4} ><span style={{color:'white'}} onClick={auth.login.bind(this)}>Login</span></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron style={styles.jumbotronStyle}>
          <div style={styles.root}>
            <h1 style={styles.title} > Put our DNA to work</h1>
            <h2 style={styles.subtitle} > for our own benefit and under our own terms </h2>
            {/* <div style={{width: 'auto', height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <iframe width="373" height="210" src="https://www.youtube.com/embed/Ur57PRdbMuw" frameBorder="0" allowFullScreen></iframe>
              </ResponsiveEmbed>
              </div> */}
            <ButtonToolbar style={styles.toolbar}>
              <Button style={styles.buttonPrimary} lock bsSize="large" bsStyle="primary" onClick={auth.login.bind(this)}>Join</Button>
            </ButtonToolbar>
            <p>
              <UserCount/> Humans and counting<br/> 
                <small>(first 50 get first in line for new features, free storage, etc. just saying...)</small>
            </p>
            <p>
              <a href="http://bb.dnavid.com/t/what-can-you-do-with-my-dna-information" target="_blank">
               Terms of use for my DNA information
              </a>
            </p>
            <div style={{width:'100%', textAlign:'center'}}>
              <span> Think about this: my DNA becomes waaay more useful as others join. </span> 
              <SocialShareButtons/>
            </div>
          </div>
        </Jumbotron>
        <FeaturesGridLogin />
        <FooterLogin />
      </div>
    )
  }
}

export default Radium(Login);
