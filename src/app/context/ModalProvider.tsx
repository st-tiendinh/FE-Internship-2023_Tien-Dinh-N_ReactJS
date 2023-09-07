import { ReactElement, createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers/root';

export const ModalContext = createContext<any>(false);

interface ModalPropTypes {
  children: ReactElement;
}

export const ModalProvider = ({ children }: ModalPropTypes) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPopper, setIsShowPopper] = useState(false);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  useEffect(() => {
    setIsShowModal(false);
  }, [isLogged]);

  return (
    <ModalContext.Provider value={{ isShowModal, setIsShowModal, isShowPopper, setIsShowPopper }}>
      {children}
    </ModalContext.Provider>
  );
};
