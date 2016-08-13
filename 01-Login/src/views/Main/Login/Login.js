var Radium = require('radium');
import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.js'

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
      <div style={styles.root}>
        <h2 style={styles.title} >Claim your genome</h2>
        <br/>
        <ButtonToolbar style={styles.toolbar}>
          <Button bsSize="large" bsStyle="info" onClick={auth.login.bind(this)}>Stay informed</Button>
          <Button bsSize="large" bsStyle="primary" onClick={auth.login.bind(this)}>Join the Community</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Radium(Login);
