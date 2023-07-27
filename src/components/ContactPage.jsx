import React from "react";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p>
        Thank you for visiting our Courses Application. If you have any questions, feedback, or suggestions,
        we would love to hear from you. Please feel free to contact us using the information provided below.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3>Address</h3>
          <p>
            123 Main Street
            <br />
            Gulbarga, Karnataka
            <br />
            India
            <br />
            585103
          </p>
        </div>
        <div className="col-md-6">
          <h3>Email</h3>
          <p>
            General Inquiries: info@example.com
            <br />
            Support: support@example.com
          </p>
          <h3>Phone</h3>
          <p>
            General Inquiries: +1 (123) 456-7890
            <br />
            Support: +1 (987) 654-3210
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
