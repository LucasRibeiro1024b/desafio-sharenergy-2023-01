
import { Modal } from 'antd';


interface IModal {
  title  : string
  content ?: string
  okText ?: string
  cancelText ?: string,
  open : boolean,
  onOk : () => void,
  onCancel : () => void
}

function ShowDeleteConfirm({ title, content, okText, cancelText, open, onOk, onCancel}: IModal) {

  return (
    <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
      >
        {content}
      </Modal>
  )
};


export default ShowDeleteConfirm;
