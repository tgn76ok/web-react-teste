import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import img1 from '../../asserts/img/maolivro.jpg'
import img2 from '../../asserts/img/livros.jpg'
import img3 from '../../asserts/img/calc.jpg'

// Importe o componente Carousel do react-bootstrap
import './styles.css';

const MyCarousel = () => {
  return (
    <div className="container-main-Carousel1" >
      <Carousel controls={false}>
        <Carousel.Item>
            <div className="container-card-Carousel1">
            
              <img className="imagen-Carousel1" src={img1} alt="First slide" />

              
              <p className="text-Carousel1">Cada momento dedicado aos estudos é um investimento no seu futuro acadêmico.</p>
            
            </div>
            
        </Carousel.Item>
        <Carousel.Item>
        <div className="container-card-Carousel1">
            
            <img className="imagen-Carousel1" src={img2} alt="First slide" />
            <p className="text-Carousel1">Cada momento dedicado aos estudos é um investimento no seu futuro acadêmico.</p>
          
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
        <div className="container-card-Carousel1">
            
            <img className="imagen-Carousel1" src={img3} alt="First slide" />
            <p className="text-Carousel1">Cada momento dedicado aos estudos é um investimento no seu futuro acadêmico.</p>
          
          </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;