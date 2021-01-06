import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import './newsletter-form.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { result, msg } = await addToMailChimp(email);

      if (result !== 'success') {
        throw msg; //error saving from our end
      }
      setEmail('');
      setAlert('Thank you for subscribing!');

      //user errors
    } catch (err) {
      if (err.includes('already subscribed')) {
        setAlert(
          "You're already subscribed! Email us if you need more assistance."
        );
      } else {
        setAlert('Please enter a valid email, or email us for assistance.');
      }
    }
  };

  return (
    <div className="newsletter-alert">
    <div className="newsletter-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email address"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
      </div>
      {!!alert && <p>{alert}</p>}
    </div>
  );
};

export default NewsletterForm;
