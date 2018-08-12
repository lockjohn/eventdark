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
    this.demoUser = this.demoUser.bind(this);
}

componentDidMount() {
    this.props.clearErrors();
}

demoUser() {
    this.props.login({username: "Dolores", password: "123456"});
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
        <div className="form-container">
        <form className="session-form">
            <h1>eD</h1>
            <h2>Let's get started</h2>
            <p>Enter your info to {formType} or <em>{navLink}</em></p>
            <label className="login-input-label">Username<br />
                <input value={this.state.username}
                onChange={this.update('username')}
                placeholder=" Enter Username"
                className="login-input" />
            </label><br />
            <label className="login-input-label">Password<br />
                <input type="password"
                placeholder=" Enter Password" 
                value={this.state.password} 
                onChange={this.update('password')}
                className="login-input"/>
            </label>
            {this.renderErrors()}
            <button 
                className="login-button first"
                onClick={this.handleSubmit}
                >Get Started</button><br />
            <button 
                className="login-button"
                onClick={this.demoUser}
                >Demo</button><br />
        </form>
        </div>
    )}
}

export default withRouter(SessionForm);