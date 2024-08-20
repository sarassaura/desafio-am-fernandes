import Imovel from "_models/Imoveis";
import { flattenObject } from "_utils/flatten";
import formatQuery from "_utils/formatQuery";

export default async function Page({
  params,
}: {
  params: { projeto: string };
}) {
  const data = await fetch(`https://api.estagio.amfernandes.com.br/imoveis`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const imoveis: Array<Imovel> = await data.json();

  imoveis.forEach((imovel: any, index: number) => {
    imoveis[index] = flattenObject(imovel) as Imovel;
  });

  const imovel = imoveis.find(
    (imovel) => formatQuery(imovel.nome) === formatQuery(params.projeto)
  );
  return (
    <div className="flex flex-col lg:flex-row container w-full pt-10">
      <img src={imovel?.fachada} alt={imovel?.nome} className="flex lg:w-1/2" />
      <div className="flex flex-col p-8 gap-2 h-full items-start justify-start lg:w-1/2">
        <h1 className="capitalize text-3xl mb-2">Projeto {imovel?.nome}</h1>
        <p>
          Endereço: {imovel?.rua}, {imovel?.num}
        </p>
        <p>Bairro: {imovel?.bairro}</p>
        <p>Cep: {imovel?.cep}</p>
        <p>Cidade: {imovel?.cidade}</p>
        <p>Latitude: {imovel?.["location._lat"]}</p>
        <p>Longitude: {imovel?.["location._long"]}</p>
        <p>Dormitórios: {imovel?.["planta.dorms"]}</p>
        <p>Metragem: {imovel?.["planta.metragem"]}</p>
        <p>Preço: R$ {imovel?.["planta.preco"]},00</p>
        {imovel?.["planta.vagas"] && <p>Vagas: {imovel?.["planta.vagas"]}</p>}
      </div>
    </div>
  );
}
