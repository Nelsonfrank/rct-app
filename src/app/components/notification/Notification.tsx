// dependencies
import { notification } from 'antd';
// export interface NotificationProps {}

const Notification = (
  successed: boolean,
  message?: string,
  description?: string,
) => {
  successed
    ? notification['success']({
        message: message,
        description: description,
      })
    : notification['error']({
        message: message,
        description: description,
      });
};
export default Notification;
