// src/pages/account.js
// Manages user account password reset (in presentation only)

// child of the app component

import React from 'react';
import './pages.css';

function Account() {
  return (
    <div className="account-page">
      <div id="Acct-heading">
        <h2>Account Management Page</h2>
      </div>
      <div id="Acct-form-box">
        <form>
          <div id="Acct-email-group" className="form-group">
            <input type="email" id="Acct-email" placeholder="Enter your email here" />
          </div>
          <button type="submit" id="Acct-submit-button" className="btn">Submit</button>
          <p id="Acct-reset-info" className="forgot-password">We will email you a reset password link</p>
        </form>
      </div>
    </div>
  );
}

export default Account;
