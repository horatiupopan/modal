import { useEffect } from 'react';
import './modal.css';

const Modal = ({isOpen, children}) => {
    return isOpen && (
        <div className="modal">
            {children}
        </div>
    );
}

export default Modal;