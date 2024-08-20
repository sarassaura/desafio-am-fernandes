"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface PreferencesType {
  bairro?: string;
  rua?: string;
  "planta.dorms"?: number;
  "planta.metragem"?: number;
  "planta.preco"?: number;
  "planta.vagas"?: number;
}

interface PreferencesContextType {
  preferences: PreferencesType;
  setPreferences: Dispatch<SetStateAction<PreferencesType>>;
}

interface PreferencesContextProviderProps {
  children: React.ReactNode;
}

export const PreferencesContext = createContext({} as PreferencesContextType);

export function PreferencesContextProvider({
  children,
}: PreferencesContextProviderProps) {
  const [preferences, setPreferences] = useState<PreferencesType>({
    bairro: undefined,
    rua: undefined,
    "planta.dorms": undefined,
    "planta.metragem": undefined,
    "planta.preco": undefined,
    "planta.vagas": undefined,
  });

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
}
