import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    name: '',
    email: '',
    birthdate: '',
    contact: false,
    validated: false,
  };

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      validated: false,
    });
  };

  handleChange = (e, id) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleConsent = () => {
    this.setState({ contact: !this.state.contact });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const postBody = {
      id: 1,
      name: this.state.name,
      email: this.state.email,
      birthDate: this.state.birthdate,
      emailConsent: this.state.contact,
    };

    axios
      .post(
        'https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users',
        JSON.stringify(postBody)
      )
      .then((response) => {
        console.log('Form Submitted!');
      })
      .then(this.setState({ name: '', email: '', birthdate: '' }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} noValidate>
        <h1>Contact Us</h1>
        <div className="name">
          <label htmlFor="name">First Name</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            placeholder="Full Name"
            id="name"
            noValidate
            onChange={(e) => this.handleChange(e, 'name')}
          ></input>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            value={this.state.email}
            placeholder="hello@gmail.com"
            id="email"
            noValidate
            onChange={(e) => this.handleChange(e, 'email')}
          ></input>
        </div>
        <div className="birthdate">
          <label htmlFor="birthdate">Birth Date</label>
          <br />
          <input
            type="date"
            value={this.state.birthdate}
            placeholder="mm/dd/yyyy"
            id="birthdate"
            noValidate
            onChange={(e) => this.handleChange(e, 'birthdate')}
          ></input>
        </div>
        <div className="email-consent">
          <input type="checkbox" onChange={this.handleConsent}></input>
          <label htmlFor="consent">I agree to be contaced via email</label>
        </div>
        <button onClick={this.handleClear}>Clear</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
