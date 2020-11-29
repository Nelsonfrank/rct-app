import React from 'react';

//Components
import { Card } from 'antd';
import { Button } from 'antd';

export interface CardsProps {
  title?: string;
  styles?: React.CSSProperties;
  subtitle?: string;
  actionBtn?: string;
  className?: string;
  img?: string;
  imgTitle?: string;
  imgDescrip?: string;
}

const Cards: React.FC<CardsProps> = (CardsProps) => {
  const {
    title,
    subtitle,
    children,
    styles,
    actionBtn,
    className,
    img,
    imgTitle,
    imgDescrip,
  } = CardsProps;
  return (
    <Card
      style={{
        ...styles,
        borderRadius: 10,
        margin: '1rem 1.25rem',
      }}
      cover={<img src={img} alt="slider-1" style={{ width: '100%' }} />}
      className={className}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 0 }}>
        {title}
      </h3>
      {img ? <Card.Meta title={imgTitle} description={imgDescrip} /> : null}
      {children}
      <h1 style={{ fontSize: '1.125rem' }}>{subtitle}</h1>
      <Button type="link" style={{ paddingLeft: 0 }}>
        {actionBtn}
      </Button>
    </Card>
  );
};

export default Cards;
