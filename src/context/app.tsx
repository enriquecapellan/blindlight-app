import React, { useState, FC, createContext } from 'react';

export const AppContext = createContext<
  [AppState, React.Dispatch<React.SetStateAction<AppState>>]
>([
  {
    vision: {
      generate_description: true,
      extract_text: true,
      extract_labels: true,
      activateFlash: false,
    },
  },
  () => {},
]);

const AppProvider: FC = ({ children }) => {
  const value = useState<AppState>({
    vision: {
      generate_description: true,
      extract_labels: true,
      extract_text: true,
      activateFlash: true,
    },
  });

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
