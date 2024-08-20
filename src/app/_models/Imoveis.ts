interface Imovel {
  bairro: string;
  cep: string;
  cidade: string;
  fachada: string;
  "location._lat": number;
  "location._long": number;
  nome: string;
  num: string;
  rua: string;
  "planta.dorms"?: number;
  "planta.metragem": number;
  "planta.preco": number;
  "planta.vagas"?: number;
}

export default Imovel;
