import React from 'react';

//utils
import { formatDate } from '../../../../../../utils';

// Props Types
export interface MessageProps {
  side?: string;
  img?: string;
  text?: string;
  name?: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const { img, side, text, name } = props;
  return (
    <div className={`msg ${side}-msg`}>
      <div className="msg-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{name}</div>
          <div className="msg-info-time">{formatDate(new Date())}</div>
        </div>

        <div className="msg-text">{text}</div>
      </div>
    </div>
  );
};

export default Message;
