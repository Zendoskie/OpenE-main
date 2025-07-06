import React, { createContext, useState, useContext } from "react";

type SettingsContextType = {
  allowAiVoiceOver: boolean;
  setAllowAiVoiceOver: (value: boolean) => void;
};

export const SettingsContext = createContext<SettingsContextType>({
  allowAiVoiceOver: false,
  setAllowAiVoiceOver: () => {},
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allowAiVoiceOver, setAllowAiVoiceOver] = useState<boolean>(false);

  return (
    <SettingsContext.Provider value={{ allowAiVoiceOver, setAllowAiVoiceOver }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Optional: handy hook for consuming the context
export const useSettings = () => useContext(SettingsContext);