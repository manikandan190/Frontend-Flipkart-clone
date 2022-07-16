import React from 'react'
import Layout from '../../components/Layout';

import Header from '../../components/Header';

import MenuHeader from '../../components/MenuHeader';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./style.css";
const HomePage = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Layout>
    <div className='drop'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/flipkart-sale-large_1540314171421.jpg"
        alt="First slide"
        height={300}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/d47e9fe5365c0445.jpeg"
        alt="Second slide"
        height={300}
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/mpbreaking52849234.webp"
        alt="Third slide"
        height={300}
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/apple-iphone-xs-and-xs-max-launch-1536778752.jpg"
      alt="Third slide"
      height={300}
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  </div>
  </Layout>
  );
}

export default HomePage 