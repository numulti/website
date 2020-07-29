import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailChimp(email)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setAlert('Thank you for subscribing!');
      })
      .catch((err) => {
        if (err.includes('already subscribed')) {
          setAlert(
            "You're already subscribed! Email us if you need more assistance."
          );
        } else {
          setAlert('Please enter a valid email, or email us for assistance.');
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email address" onChange={handleChange} />
        <button type="submit">Subscribe</button>
      </form>
      {!!alert && <p>{alert}</p>}
    </>
  );
};

export default NewsletterForm;
