import { message } from "antd";

export const ToastSuccess = (title = "Thành công", callback = () => {}) => {
  message.success(title, [1.5], callback);
};
export const ToastError = (title = "Lỗi", callback = () => {}) => {
  message.error(title, [1.5], callback);
};
export const ToastInfo = (title = "Default", callback = () => {}) => {
  message.info(title, [1.5], callback);
};
export const ToastWaring = (title = "Cảnh báo", callback = () => {}) => {
  message.warning(title, [1.5], callback);
};
