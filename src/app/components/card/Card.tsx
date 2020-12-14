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
  onClick?: () => void;
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
    onClick,
  } = CardsProps;
  return (
    <Card
      style={{
        ...styles,
        borderRadius: 10,
      }}
      cover={img && <img src={img} alt="slider-1" style={{ width: '100%' }} />}
      className={className}
      onClick={onClick}
    >
      {title ? (
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 0 }}>
          {title}
        </h3>
      ) : null}
      {subtitle ? <h1 style={{ fontSize: '1.125rem' }}>{subtitle}</h1> : null}
      {img ? <Card.Meta title={imgTitle} description={imgDescrip} /> : null}
      {children}
      {actionBtn && (
        <Button type="link" style={{ paddingLeft: 0 }}>
          {actionBtn}
        </Button>
      )}
    </Card>
  );
};

export default Cards;
