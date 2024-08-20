import Imovel from "_models/Imoveis";

function getNeighborhoodByFrequency(data: Imovel[]) {
  const bairroCount: { [key: string]: number } = {};

  data.forEach((imovel) => {
    const bairro = imovel.bairro;
    bairroCount[bairro] = (bairroCount[bairro] || 0) + 1;
  });

  return Object.keys(bairroCount).sort(
    (a, b) => bairroCount[b] - bairroCount[a]
  );
}

function getDormitories(data: Imovel[]) {
  const dormitoryCount = new Set<number>();

  data.forEach((imovel) => {
    const dormitory = imovel["planta.dorms"];
    if (dormitory) {
      dormitoryCount.add(dormitory);
    }
  });

  return Array.from(dormitoryCount).sort((a, b) => a - b);
}

function getPrices(data: Imovel[]): number[] {
  const prices: Array<number> = [];

  data.forEach((imovel) => {
    const price = imovel["planta.preco"];
    prices.push(price);
  });

  return prices.sort((a, b) => a - b);
}

export { getNeighborhoodByFrequency, getDormitories, getPrices };
