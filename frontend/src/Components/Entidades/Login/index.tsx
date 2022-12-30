// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Modal from "antd/es/modal/Modal";

interface IPageLogin{
  children : ReactJSXElement
  handleOk : () => void
  visivel : boolean
  handleCancel : () => void
}
function PageLogin({children, handleOk, visivel, handleCancel }: IPageLogin) : ReactJSXElement{

  return(
    <Modal
    onOk={handleOk}
    open={visivel}
    onCancel={handleCancel}
    >
      {children}
    </Modal>
  )
}



export default PageLogin;