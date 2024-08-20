"use client";

import CardProject from "@components/CardProject";
import { ImoveisContext } from "_context/ImoveisContext";
import {
  PreferencesContext,
  PreferencesType,
} from "_context/PreferencesContext";
import Imovel from "_models/Imoveis";
import { useContext, useEffect, useState } from "react";
import "./styles.css";

function Projetos() {
  const { imoveis } = useContext(ImoveisContext);
  const { preferences } = useContext(PreferencesContext);

  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);

  function filterImoveis(
    imoveis: Imovel[],
    preferences: PreferencesType
  ): Imovel[] {
    return imoveis.filter((imovel) => {
      const matchesBairro =
        !preferences.bairro ||
        imovel.bairro === preferences.bairro ||
        preferences.bairro === "Bairro";
      const matchesRua = !preferences.rua || imovel.rua === preferences.rua;
      const matchesDorms =
        preferences["planta.dorms"] === undefined ||
        imovel["planta.dorms"] === preferences["planta.dorms"] ||
        Number.isNaN(preferences["planta.dorms"]);
      const matchesMetragem =
        preferences["planta.metragem"] === undefined ||
        imovel["planta.metragem"] >= preferences["planta.metragem"];
      const matchesPreco =
        preferences["planta.preco"] === undefined ||
        imovel["planta.preco"] <= preferences["planta.preco"] * 1000 ||
        Number.isNaN(preferences["planta.preco"]);
      const matchesVagas =
        preferences["planta.vagas"] === undefined ||
        imovel["planta.vagas"] === preferences["planta.vagas"];

      return (
        matchesBairro &&
        matchesRua &&
        matchesDorms &&
        matchesMetragem &&
        matchesPreco &&
        matchesVagas
      );
    });
  }

  useEffect(() => {
    setFilteredImoveis((imoveis) => {
      const filtered = filterImoveis(imoveis, preferences);

      console.log(filtered);

      return filtered;
    });
  }, [preferences]);

  return (
    <div className="center container w-full p-4">
      <div className="cardGallery justify-items-center">
        {filteredImoveis.map((imovel, index) => (
          <CardProject key={index} imovel={imovel}></CardProject>
        ))}
      </div>
    </div>
  );
}
export default Projetos;
