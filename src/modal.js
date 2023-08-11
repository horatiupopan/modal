import './modal.css';

const Modal = ({isOpen, setIsOpen, children}) => {

    return isOpen && (
        <div className='overlay' onClick={() => setIsOpen(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;