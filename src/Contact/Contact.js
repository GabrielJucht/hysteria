import React from 'react';
import './Contact.scss';


class contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mail: '',
      subject: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleMailChange(event) {
    this.setState({mail: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br/>
          <input type="text" value={this.state.name.value} onChange={this.handleNameChange} name="name"/>
        </label><br/>
        <label>
          Mail:
          <input type="email" value={this.state.mail.value} onChange={this.handleMailChange} name="mail"/>
        </label><br/>
        <label>
          Subject:
          <input type="text" value={this.state.subject.value} onChange={this.handleSubjectChange} name="subject"/>
        </label><br/>
        <textarea type="textarea" name="content">
        </textarea><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default contact;