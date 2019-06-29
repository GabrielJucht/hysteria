import React from 'react';
import './Contact.scss';


class contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name"/>
        </label><br/>
        <label>
          Mail:
          <input type="email" value={this.state.value} onChange={this.handleChange} name="mail"/>
        </label><br/>
        <label>
          Subject:
          <input type="text" value={this.state.value} onChange={this.handleChange} name="subject"/>
        </label><br/>
        <textarea type="textarea" name="content">
        </textarea><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default contact;