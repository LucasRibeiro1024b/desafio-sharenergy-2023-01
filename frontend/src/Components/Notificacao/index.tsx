import { message } from 'antd';

export const success = (mensagem : string) => {
  const [messageApi, contextHolder] = message.useMessage()
  messageApi.open({
    type: 'success',
    content: mensagem,
  });

  return {contextHolder}
};
