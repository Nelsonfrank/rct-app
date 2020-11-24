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

const ArrowLeft = () => (
  <button className="Arrow" style={{ right: '30px' }}>
    <RightOutlined style={{ fontSize: '4rem' }} />
  </button>
);

const ArrowRight = () => (
  <button className="Arrow" style={{ left: '-15px' }}>
    <LeftOutlined style={{ fontSize: '4rem' }} />
  </button>
);

// Carousel Setting
const settings = {
  infinite: true,
  speed: 500,
  arrows: true,
  prevArrow: <ArrowRight />,
  nextArrow: <ArrowLeft />,
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
            <img
              src={Slider1}
              alt="Slider1"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src={Slider2}
              alt="Slider2"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src={Slider3}
              alt="Slider3"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src={Slider4}
              alt="Slider4"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src={Slider5}
              alt="Slider5"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src={Slider6}
              alt="Slider6"
              height="200"
              style={{ width: '100%' }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default UsersHeader;
