"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ImoveisContext } from "_context/ImoveisContext";
import {
  PreferencesContext,
  PreferencesType,
} from "_context/PreferencesContext";
import { getDormitories, getNeighborhoodByFrequency } from "_utils/search";
import Link from "next/link";
import { ChangeEvent, useContext } from "react";

function SearchImovel() {
  const { imoveis } = useContext(ImoveisContext);
  const { setPreferences, preferences } = useContext(PreferencesContext);
  const prices = [400, 800, 1200, 1600, 2000, 2400];

  function changePreferences(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.name === "bairro") {
      setPreferences((prev: PreferencesType) => ({
        ...prev,
        bairro: e.target.value,
      }));
    } else {
      setPreferences((prev: PreferencesType) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value),
      }));
    }
  }

  return (
    <div className="absolute flex flex-col justify-center items-center z-40 w-full h-full">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl m-6 font-bold">
        Projetos que inspiram confiança
      </h1>
      <form className="flex text-accent">
        <select
          id="neighborhoods"
          className="bg-white h-14 px-4 rounded-l-lg hover:brightness-110"
          name="bairro"
          onChange={(e) => changePreferences(e)}
          value={preferences.bairro}
        >
          <option value={undefined}>Bairro</option>
          {getNeighborhoodByFrequency(imoveis)?.map((bairro, index) => {
            return (
              <option key={index} value={bairro}>
                {bairro}
              </option>
            );
          })}
        </select>
        <select
          id="dormitories"
          className="bg-white h-14 px-4 rounded-none hover:brightness-110"
          name="planta.dorms"
          onChange={(e) => changePreferences(e)}
          value={preferences["planta.dorms"]}
        >
          <option value={undefined}>Dormitórios</option>
          {getDormitories(imoveis)?.map((dormitory, index) => {
            return (
              <option key={index} value={dormitory}>
                {dormitory} dormitórios
              </option>
            );
          })}
        </select>
        <select
          id="Preços"
          className="hidden sm:flex bg-white h-14 px-4 rounded-none hover:brightness-110"
          name="planta.preco"
          onChange={(e) => changePreferences(e)}
          value={preferences["planta.preco"]}
        >
          <option value={undefined}>Valor total até</option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              R$ {price < 1000 ? "  " : ""}
              {price}.000,00
            </option>
          ))}
        </select>
        <Link className="bg-white p-4 rounded-r-lg " href="/projetos">
          <div className="h-6 w-6">
            <Icon icon="ion:search" height={24} color="#00355E" />
          </div>
        </Link>
      </form>
    </div>
  );
}
export default SearchImovel;
