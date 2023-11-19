import React, { Component } from 'react'
import styles from './Contacts.module.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
		<form className={styles.forms}>
		<h1 className={styles.h1}> Contact Form</h1>
			<label>Name:</label>
			<input type="text" name="name"/><br />
			
			<label>Email:</label>
			<input type="email" name="email"  className={styles.input} /><br />
			
			<label>Phone no:</label>
			<input type="phoneno" name="phone" /><br />
			
			<input type="submit" name="submit" />
		</form>
	  </div>
    )
  }
}
