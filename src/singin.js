import React from 'react';
import './App.css';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <div className="App-content">
                        <h1>Registro</h1>
                        <form className="App-form">
                            <div>
                                <p className="label">Nombre:</p>
                                <input
                                    name="Email"
                                    //placeholder="Email"
                                    type="text"
                                    onChange={null}
                                />
                                <p className="label">Correo:</p>
                                <input
                                    name="Email"
                                    //placeholder="Email"
                                    type="text"
                                    onChange={null}
                                />
                                <p className="label">Contraseña:</p>
                                <input
                                    name="Password"
                                    //placeholder="Password"
                                    type="password"
                                    onChange={null}
                                />
                            </div>
                            <div className="buttons">
                                <p
                                    className="send-button">
                                    Enviar
                                </p>
                            </div>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}

export default SignIn;