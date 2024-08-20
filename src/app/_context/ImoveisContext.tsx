"use client";

import Imovel from "_models/Imoveis";
import { flattenObject } from "_utils/flatten";
import { createContext } from "react";

interface ImoveisContextType {
  imoveis: Imovel[];
}

interface ImoveisContextProviderProps {
  children: React.ReactNode;
}

export const ImoveisContext = createContext({} as ImoveisContextType);

export async function ImoveisProvider({
  children,
}: ImoveisContextProviderProps) {
  const revalidatedData = await fetch(
    `https://api.estagio.amfernandes.com.br/imoveis`,
    {
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  const imoveis: Array<Imovel> = await revalidatedData.json();

  imoveis.forEach((imovel: any, index: number) => {
    imoveis[index] = flattenObject(imovel) as Imovel;
  });

  return (
    <ImoveisContext.Provider value={{ imoveis }}>
      {children}
    </ImoveisContext.Provider>
  );
}
