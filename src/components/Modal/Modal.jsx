import './Modal.scss'
import { createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({ onClick}) => {
    return createPortal(
        <div className="overlay">
            <div className="modal">
                Show modal window
                <img src="" alt="" />
            </div>
            <button type='button' onClick={onClick }>Закрыть модальное окно</button>
        </div>, modalRoot)
}

export default Modal