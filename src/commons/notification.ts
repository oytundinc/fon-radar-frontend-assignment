import { notification } from "antd";

export function showErrorNotification(message: string, duration?: number) {
    notification.open({
        message: message,
        type: 'error',
        duration: duration || 2,
    });
}