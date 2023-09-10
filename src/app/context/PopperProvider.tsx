import { ReactElement, createContext, useState } from 'react';

export const PopperContext = createContext<any>(false);

interface PopperPropTypes {
  children: ReactElement;
}

export const PopperProvider = ({ children }: PopperPropTypes) => {
  const [isShowPopper, setIsShowPopper] = useState(false);

  return (
    <PopperContext.Provider
      value={{
        isShowPopper,
        setIsShowPopper,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
};
