import React from 'react';

//Components
import CardItem from './components/card-item';
import { Carousel } from 'antd';

// Props Types
export interface SectionBodyProps {
  objectList: { name: string; image?: string }[];
}

// Carousel Setting
const settings = {
  dots: false,
  arrow: false,
  slidesToShow: 2,
  initialSlide: 2,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const SectionBody: React.FC<SectionBodyProps> = (props: SectionBodyProps) => {
  const { objectList } = props;

  return (
    <>
      <div
        style={{
          marginTop: '0.75rem',
        }}
      >
        <Carousel {...settings}>
          {objectList.map((item) => (
            <CardItem username={item.name} key={item.name} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SectionBody;
