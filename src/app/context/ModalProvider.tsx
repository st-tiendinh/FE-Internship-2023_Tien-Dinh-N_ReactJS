import { ReactElement, createContext, useState } from 'react';

export const ModalContext = createContext<any>(false);

interface ModalPropTypes {
  children: ReactElement;
}

export const ModalProvider = ({ children }: ModalPropTypes) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>{children}</ModalContext.Provider>
  );
};
