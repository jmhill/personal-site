import React from 'react';

const ContactCard = ({ header, contact, social }) => (
  <React.Fragment>
    <h2 className="content-subhead">{header}</h2>
    <ul className="post-description contact-list">
      <li><i className="fa fa-phone"></i> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
      <li><i className="fa fa-envelope"></i> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
      <li><i className="fa fa-twitter"></i> <a href={`https://twitter.com/${social.twitter}`}>@{social.twitter}</a></li>
      <li><i className="fa fa-linkedin"></i> <a href={`https://www.linkedin.com/in/${social.linkedin}`}>View my resume</a></li>
    </ul>
  </React.Fragment>
);

export default ContactCard;
