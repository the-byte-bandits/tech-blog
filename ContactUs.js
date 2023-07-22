import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <h2 style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                Lets get in Touch
              </h2>
              <p style={{ color: "black", fontSize: "18px" }}>
              Whether you have feedback, inquiries, or simply want to share your thoughts on our blog posts, we are eager to hear from you. We value your opinions and look forward to fostering a vibrant community of like-minded individuals who share a passion for knowledge and learning. Join us on this exciting journey as we explore new ideas, spark discussions, and create meaningful connections through our blog.
              </p>
            </div>
            <div className="my-links">
              <a href="/">
                <FaFacebook />
              </a>

              <a href="/">
                <FaTwitter />
              </a>

              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-md-8">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    required
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;