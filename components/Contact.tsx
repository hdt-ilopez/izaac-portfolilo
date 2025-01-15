import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto px-4 mb-24">
      <div className="text-center mb-8">
        <h6>Connect With Me</h6>
        <h2 className="mb-4">Get In Touch</h2>
        <p className="md:w-2/3 mx-auto">
          I&apos;d love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
