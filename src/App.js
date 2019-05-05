import React from 'react';
import './App.css';
import SingIn from './singin';
import onSignUp from './singUp'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      sendIsPress: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    onSignUp(this.state.email, this.state.password)
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          {!this.state.sendIsPress && <div className="App-content">
            <h1>UNemployed</h1>
            <form className="App-form">
              <div>
                <div className="App-textInput">
                  <p className="label">Correo:</p>
                  <input
                    name="email"
                    //placeholder="Email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                  />
                </div>
                <p className="label">Contraseña:</p>
                <input
                  name="password"
                  //placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </div>
              <div className="buttons">
                <p
                  onClick={this.handleSubmit}
                  className="send-button">
                  Enviar
                </p>
                <p
                  onClick={() => {
                    this.setState({ sendIsPress: !this.state.sendIsPress })
                  }
                  }
                  className="registry-button">
                  Registrarse
                </p>
              </div>
              <p
                className="forgot-password">
                ¿Olvidaste tu contraseña?
              </p>
            </form>
          </div>}
          {this.state.sendIsPress && <SingIn />}
        </header>
      </div>
    );
  }
}

export default App;
