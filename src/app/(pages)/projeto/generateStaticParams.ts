import Imovel from "_models/Imoveis";
import { flattenObject } from "_utils/flatten";
import formatQuery from "_utils/formatQuery";

export async function useGenerateStaticParams() {
  const data = await fetch(`https://api.estagio.amfernandes.com.br/imoveis`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const imoveis: Array<Imovel> = await data.json();

  imoveis.forEach((imovel: any, index: number) => {
    imoveis[index] = flattenObject(imovel) as Imovel;
  });

  return imoveis.map((imovel) => ({
    slug: formatQuery(imovel.nome),
  }));
}
