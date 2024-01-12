import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import YouTubecard from '../YoutubeCart';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { teal } from '@mui/material/colors';


// Importe o componente Carousel do react-bootstrap
import './styles.css';

const MyCarousel = () => {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className="container-main-Carousel" >
      
      <Carousel fade controls={true} prevIcon={<SkipPreviousIcon sx={{ color: teal[500] }}/>} nextIcon={<SkipNextIcon sx={{ color: teal[500] }}/>}>
        <Carousel.Item>
          <div>
            <YouTubecard id='zic5qOWt3x4'/>

          </div>
      
            
        </Carousel.Item>
        <Carousel.Item>
          <div>
              <YouTubecard id='PWSekZSpUKo'/>

            </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <YouTubecard id='g-QcPQs0PfQ'/>

          </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;