import React from 'react';

// Components
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

//Images
import Slider1 from '../../../../assets/images/slider-1.jpg';
import Slider2 from '../../../../assets/images/slider-2.jpg';
import Slider3 from '../../../../assets/images/slider-3.jpg';
import Slider4 from '../../../../assets/images/slider-4.jpg';
import Slider5 from '../../../../assets/images/slider-5.jpg';
import Slider6 from '../../../../assets/images/slider-6.jpg';

// Styles
import './Header.less';

// Props types
// export interface UsersHeaderProps {}

// Carousel Setting
const settings = {
  infinite: true,
  speed: 500,
  arrows: false,
  swipeToSlide: true,
  autoplay: true,
  pauseOnFocus: true,
  className: 'ArrowContainer',
};

const UsersHeader: React.FC = () => {
  return (
    <>
      <div style={{ margin: '1rem 0rem' }}>
        <Carousel {...settings}>
          <div>
            <img src={Slider1} alt="Slider1" className="carousel--image" />
          </div>
          <div>
            <img src={Slider2} alt="Slider2" className="carousel--image" />
          </div>
          <div>
            <img src={Slider3} alt="Slider3" className="carousel--image" />
          </div>
          <div>
            <img src={Slider4} alt="Slider4" className="carousel--image" />
          </div>
          <div>
            <img src={Slider5} alt="Slider5" className="carousel--image" />
          </div>
          <div>
            <img src={Slider6} alt="Slider6" className="carousel--image" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default UsersHeader;
