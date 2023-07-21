// import React from "react";
// // Components
// import { Alert, Button, Form, Spinner } from "react-bootstrap";

// export default function ContactForm({ apiUrl, theme }) {
//   const [isValidated, setIsValidated] = React.useState(false);
//   const [isProcessing, setIsProcessing] = React.useState(false);
//   const [success, setSuccess] = React.useState(false);
//   const [danger, setDanger] = React.useState(false);
//   const [dangerMessage, setDangerMessage] = React.useState(null);

//   async function postData(data) {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//     return response;
//   }

//   async function handleSubmit(event) {
//     const form = event.currentTarget;
//     setSuccess(false);
//     setDanger(false);
//     setDangerMessage(null);
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setIsValidated(true);
//     const { name, email, message } = form.elements;
//     const data = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     if (form.checkValidity()) {
//       event.preventDefault();
//       event.persist();
//       setIsProcessing(true);
//       try {
//         const response = await postData(data);
//         if (!response.ok) {
//           throw new Error(
//             `${response.status} ${response.statusText}, check formspreeUrl`
//           );
//         }
//         setIsProcessing(false);
//         setIsValidated(false);
//         event.target.reset();
//         setSuccess(true);
//       } catch (error) {
//         setIsProcessing(false);
//         setIsValidated(false);
//         event.target.reset();
//         setDangerMessage(error.message);
//         setDanger(true);
//       }
//     }
//   }

//   return (
//     <>
//       <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
//         <Form.Group className="mx-auto mb-3 form-group" controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control required type="text" placeholder="Your name" />
//           <Form.Control.Feedback type="invalid">
//             <h5>Name must be at least one character.</h5>
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className="mx-auto mb-3 form-group" controlId="email">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             required
//             pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
//             placeholder="someone@something.com"
//           />
//           <Form.Control.Feedback type="invalid">
//             <h5>Please enter a valid email.</h5>
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className="mx-auto mb-3 form-group" controlId="message">
//           <Form.Label>Message</Form.Label>
//           <Form.Control required as="textarea" placeholder="Your message..." />
//           <Form.Control.Feedback type="invalid">
//             <h5>Please provide a valid message.</h5>
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className="mx-auto text-center form-group">
//           {apiUrl && (
//             <Button
//               size="lg"
//               variant={theme === "light" ? "outline-dark" : "outline-light"}
//               type="submit"
//               disabled={isProcessing}
//               className="my-3"
//             >
//               Submit{" "}
//               {isProcessing && (
//                 <Spinner animation="border" variant="success" size="sm" />
//               )}
//             </Button>
//           )}

//           <Alert
//             show={success}
//             variant="success"
//             onClose={() => setSuccess(false)}
//             dismissible
//           >
//             <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
//           </Alert>
//           <Alert
//             show={danger}
//             variant="danger"
//             onClose={() => setDanger(false)}
//             dismissible
//           >
//             <Alert.Heading>{dangerMessage}</Alert.Heading>
//           </Alert>
//           <Alert show={!apiUrl} variant="danger">
//             <Alert.Heading>You must provide an API Endpoint URL.</Alert.Heading>
//           </Alert>
//         </Form.Group>
//       </Form>
//     </>
//   );
// }

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission, e.g., send the data to the server
    console.log(formData);
    // For simplicity, we're just logging the form data here
    // You can add the submission logic to your server or any other desired action
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;