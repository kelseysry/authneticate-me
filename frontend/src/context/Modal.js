import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();
  console.log('value', value);

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}
export function AboutModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
 if (!modalNode) return null;

 return ReactDOM.createPortal(

   <div id='modal'>

     <div id='modal-background' onClick={onClose} />
     <div id='modal-content'>{children}</div>
   </div>,
   modalNode
 );
}


export function LoginModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
 if (!modalNode) return null;

 return ReactDOM.createPortal(

   <div id='modal'>

     <div id='login-modal-background' onClick={onClose} />
     <div id='login-modal-content'>{children}</div>
   </div>,
   modalNode
 );
}
