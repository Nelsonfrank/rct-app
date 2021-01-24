import React from 'react';

//Components
import { Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
export interface CardsProps {
  title?: string;
  styles?: React.CSSProperties;
  subtitle?: string;
  actionBtn?: string;
  actionBtnRoute?: string;
  className?: string;
  img?: string;
  imgTitle?: string;
  imgDescrip?: string;
  backButton?: boolean;
  isHoverable?: boolean;
  onClick?: () => void;
}

const Cards: React.FC<CardsProps> = (CardsProps) => {
  const {
    title,
    subtitle,
    children,
    styles,
    actionBtn,
    actionBtnRoute = '',
    className,
    img,
    imgTitle,
    imgDescrip,
    backButton,
    onClick,
    isHoverable,
  } = CardsProps;
  return (
    <Card
      style={{
        ...styles,
        borderRadius: 10,
        marginBottom: '1.2rem',
        marginLeft: '1rem',
      }}
      cover={img && <img src={img} alt="slider-1" style={{ width: '100%' }} />}
      className={className}
      onClick={onClick}
      hoverable={isHoverable}
    >
      {title ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {backButton ? (
            <div>
              <div
                style={{
                  // marginLeft: '1.5rem',
                  // marginTop: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Button
                  type="text"
                  onClick={() => navigate(-1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowLeftOutlined
                    style={{ fontSize: '1.75rem', fontWeight: 600 }}
                  />
                </Button>
              </div>
            </div>
          ) : null}
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 0 }}>
            {title}
          </h3>
        </div>
      ) : null}
      {subtitle ? <h1 style={{ fontSize: '1.125rem' }}>{subtitle}</h1> : null}
      {img ? <Card.Meta title={imgTitle} description={imgDescrip} /> : null}
      {children}
      {actionBtn && (
        <Button
          type="link"
          style={{ paddingLeft: 0 }}
          onClick={() => navigate(actionBtnRoute)}
        >
          {actionBtn}
        </Button>
      )}
    </Card>
  );
};

export default Cards;
