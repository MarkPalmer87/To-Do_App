//src/pages/contact.js
// Renders the contact form with fields for first and last name, email, and comments

// child of the app component

import React, { useState } from 'react';
import './contact.css'; // Import the specific CSS file

function Contact() {
  // Define state variables for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  // Handle change events for each input field
  const handleFirstNameChange = (e) => setFirstName(e.target.value);  // e for event obect
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCommentsChange = (e) => setComments(e.target.value);

  return (
    <div className="contact-form">
      <div id="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <form>
        <div id="contact-first-name-group">
          <label htmlFor="contact-first-name">First Name</label>
          <input
            type="text"
            id="contact-first-name"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
          />
        </div>
        <div id="contact-last-name-group">
          <label htmlFor="contact-last-name">Last Name</label>
          <input
            type="text"
            id="contact-last-name"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
          />
        </div>
        <div id="contact-email-group">
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>
        <div id="contact-comments-group">
          <label htmlFor="contact-comments">Comments</label>
          <textarea
            id="contact-comments"
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Your comments"
          ></textarea>
        </div>
        <button type="submit" id="contact-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
