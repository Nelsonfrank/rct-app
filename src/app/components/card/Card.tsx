import React from 'react';
//Components
import { Card } from 'antd';
import { Button } from 'antd';

export interface CardsProps {
  title?: string;
  subtitle?: string;
  others?: string;
}

const Cards: React.FC<CardsProps> = (CardsProps) => {
  const { title, subtitle, others, children } = CardsProps;
  return (
    <Card
      style={{ width: 250, borderRadius: 10, margin: '1rem 1.25rem' }}
      {...others}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 0 }}>
        {title}
      </h3>
      <h1 style={{ fontSize: '1.125rem' }}>{subtitle}</h1>
      <Button type="link" style={{ paddingLeft: 0 }}>
        View More
      </Button>
      {children}
    </Card>
  );
};

export default Cards;
