import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Modal as ModalMod } from "./style"

interface IPageLogin{
  children : ReactJSXElement
  handleOk : () => void
  visivel : boolean
  handleCancel : () => void
}
function Modal({children, handleOk, visivel, handleCancel }: IPageLogin) : ReactJSXElement{

  return(
    <ModalMod
    onOk={handleOk}
    open={visivel}
    onCancel={handleCancel}
    >
      {children}
    </ModalMod>
  )
}

export default Modal