import React from "react";
import './Modal.scss'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends React.Component { 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown',this. handleKeyDown)
     }
    
    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    }
    
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }

    render() {
        

        return createPortal(
        <div className="overlay" onClick={this.handleBackdropClick }>
            <div className="modal">
                <img src="" alt="" />
            </div>
                
            <button type='button' onClick={ this.props.onClick }>Закрыть модальное окно</button>
        </div>, modalRoot)
    }
}