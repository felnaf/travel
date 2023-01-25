import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Packages from './Packages';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=900&t=st=1674107685~exp=1674108285~hmac=d68d9929a7e8d5999138be0235545c84480b4516735bc577a07ab44e2e032942"
            style={{ height: '600px', width: '350px' }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Take Only Pictures Leave Only Footprints</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/travel-concept-with-landmarks_23-2149153251.jpg?size=626&ext=jpg"
            style={{ height: '600px', width: '350px' }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Keep calm and travel on</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/happy-family-with-colorful-hats-suitcase-their-convertible-car-roof-with-mountain-background_411285-6147.jpg?size=626&ext=jpg"
            style={{ height: '600px', width: '350px' }}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Life is not meant to be in one place</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="top-packages">
        Most Selling Packages
        <Packages />
      </div>
    </div>
  );
};

export default Home;
