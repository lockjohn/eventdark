import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

constructor (props) {
    super(props);
    this.state = {
        username: '',
        password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

update(field)  {
    return e => this.setState(
        { [field]: e.currentTarget.value }
    )
}
 
handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
}

renderErrors() {
    return (
        <ul className="login-errors">
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
    );
}

render () {
 const { formType, navLink} = this.props

    return(
        <form className="session-form">
            <h2>Let's get started</h2><br />
            <p>Enter your username and password to {formType} or {navLink}</p>
            <label className="login-input-label">Username
                <input value={this.state.username}
                onChange={this.update('username')}
                className="login-input" />
            </label><br />
            <label className="login-input-labe">Password
                <input type="password" 
                value={this.state.password} 
                onChange={this.update('password')}
                className="login-input"/>
            </label><br />
            <button onClick={this.handleSubmit}>Get Started</button><br />
            {this.renderErrors}
        </form>
    )}
}

export default withRouter(SessionForm);