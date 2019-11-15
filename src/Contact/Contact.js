/*import React from 'react';
import { Formik } from 'formik';*/
import './Contact.scss';


/*class contact extends React.Component {
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
        <label for="name">Name</label>
          <input type="text" value={this.state.name.value} onChange={this.handleNameChange} id="name" name="name"/>
         <br/>
        <label for="mail">Mail</label>
          <input type="email" value={this.state.mail.value} onChange={this.handleMailChange} name="mail" id="mail"/>
        <br/>
        <label for="subject">Subject</label>
          <input type="text" value={this.state.subject.value} onChange={this.handleSubjectChange} name="subject" id="subject"/>
        <br/>
        <textarea type="textarea" name="content">
        </textarea><br/>
        <input type="submit" value="Send" id="submit" />
      </form>
    );
  }
}
*/


import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;