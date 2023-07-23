import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Import the custom CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="about-content">
            <div className="about-image">
              <img src="https://www.lisedunetwork.com/wp-content/uploads/2014/02/Types-of-Information.jpg" alt="About Us" />
            </div>
            <div className="about-text">
              <h1 className="text-center mb-5">About Us</h1>
              <p>
              Our platform is dedicated to providing users with a captivating and enriching experience in the world of blogging. Whether you're an avid reader seeking fresh insights or an aspiring writer eager to share your thoughts, our diverse range of articles covers topics from technology and science to arts and culture. Curated by a team of passionate writers and experts, our blog offers something for everyone.
              </p>
              <p>
              Immerse yourself in thought-provoking content crafted with precision and care. Our blog fosters open dialogue and intellectual exchange, creating a thriving community of like-minded individuals who engage with the latest trends and ideas. Stay up-to-date with industry news or explore timeless classics through our user-friendly interface, ensuring a seamless reading experience for all. Prepare to embark on a journey of discovery as you dive into captivating stories and ideas.
              </p>
              <p>
              Our blog not only caters to readers but also provides a platform for aspiring writers to showcase their talent. Our writing community is the heart and soul of our platform, embracing fresh perspectives and diverse voices. Whether you're a seasoned wordsmith or new to blogging, our user-friendly submission process allows you to contribute and connect with a wide audience. Embrace the opportunity to make a difference with your words and let your creativity thrive in our inclusive and supportive environment.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;