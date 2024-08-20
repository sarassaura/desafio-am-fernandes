import Imovel from "_models/Imoveis";
import Link from "next/link";

function CardProject({ key, imovel }: { key: number; imovel: Imovel }) {
  return (
    <div
      className="w-[300px] h-[450px] flex flex-col border border-accent rounded-xl box-shadow"
      key={key}
    >
      <img
        src={imovel.fachada}
        alt={imovel.nome}
        className="w-full h-56 object-cover rounded-xl"
      />
      <div className="card-content p-5 flex flex-col gap-2">
        <h2 className="text-2xl pb-2">{imovel.nome}</h2>
        <p>Bairro: {imovel.bairro}</p>
        <p>Dormitórios: {imovel["planta.dorms"]}</p>
        <p>R$ {imovel["planta.preco"]},00</p>
        <Link
          href={`/project/${imovel.nome}`}
          className="bg-accent text-white rounded-xl p-2 px-8 w-32 flex justify-center self-center"
        >
          Buscar
        </Link>
      </div>
    </div>
  );
}
export default CardProject;
