import React from 'react';

// Components
import { Carousel } from 'antd';

//Images
import Slider1 from '../../../../assets/images/Slide-1.jpg';
import Slider1Alt from '../../../../assets/images/Slide-1.webp';
import Slider2 from '../../../../assets/images/Slide-2.jpg';
import Slider2Alt from '../../../../assets/images/Slide-2.webp';
import Slider3 from '../../../../assets/images/Slide-3.jpg';
import Slider3Alt from '../../../../assets/images/Slide-3.webp';
import Slider4 from '../../../../assets/images/Slide-4.jpg';
import Slider4Alt from '../../../../assets/images/Slide-4.webp';
// import Slider5 from '../../../../assets/images/slider-5.webp';
// import Slider6 from '../../../../assets/images/slider-6.webp';

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
            <picture>
              <source type="image/webp" srcSet={Slider1Alt} />
              <img src={Slider1} alt="Slider1" className="carousel--image" />
            </picture>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcSet={Slider2Alt} />
              <img src={Slider2} alt="Slider2" className="carousel--image" />
            </picture>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcSet={Slider3Alt} />
              <img src={Slider3} alt="Slider3" className="carousel--image" />
            </picture>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcSet={Slider4Alt} />
              <img src={Slider4} alt="Slider4" className="carousel--image" />
            </picture>
          </div>
          {/* <div>
            <img src={Slider5} alt="Slider5" className="carousel--image" />
          </div>
          <div>
            <img src={Slider6} alt="Slider6" className="carousel--image" />
          </div> */}
        </Carousel>
      </div>
    </>
  );
};

export default UsersHeader;
