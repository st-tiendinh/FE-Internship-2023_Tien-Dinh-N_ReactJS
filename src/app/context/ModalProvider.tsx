import { ReactElement, createContext, useState } from 'react';

export const ModalContext = createContext<any>(false);

interface ModalPropTypes {
  children: ReactElement;
}

export const ModalProvider = ({ children }: ModalPropTypes) => {
  const [isShowPopper, setIsShowPopper] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isShowPopper,
        setIsShowPopper,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
