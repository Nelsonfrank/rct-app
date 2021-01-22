//dependencies
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// Components
import Message from './components/message';
// styles
import './Chats.less';
// export interface ChatProps {}

const Chat: React.FC = () => {
  type messageProps = {
    image: string;
    side: string;
    text: string;
    name: string;
  }[];
  const [chat, setChat] = useState<messageProps>([]);

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => {
    const PERSON_IMG = 'https://image.flaticon.com/icons/svg/145/145867.svg';
    const messageObject = {
      image: PERSON_IMG,
      side: 'left',
      text: data.message,
      name: 'Joseph',
    };
    setChat([...chat, messageObject]);
    setValue('message', '');
  };
  return (
    <div className="msger-container">
      <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i>
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              style={{
                backgroundImage:
                  'url(https://image.flaticon.com/icons/svg/327/327779.svg)',
              }}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">JOHN</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              style={{
                backgroundImage:
                  'url(https://image.flaticon.com/icons/svg/145/145867.svg)',
              }}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </div>
          {chat.map((chat, index) => (
            <Message
              text={chat.text}
              img={chat.image}
              side={chat.side}
              name={chat.name}
              key={index + 1}
            />
          ))}
        </main>

        <form className="msger-inputarea" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="msger-input"
            ref={register}
            name="message"
            placeholder="Enter your message..."
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Chat;
