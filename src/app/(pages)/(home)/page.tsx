import Image from "next/image";
import "./styles.css";
import SearchImovel from "@components/SearchImovel";

export default async function Home() {
  return (
    <div className="center relative flex-col full-width">
      <div className="h-96 bg-slate-900 w-full">
        <Image
          className="absolute opacity-30 z-10"
          src="/images/entrada.webp"
          alt="Background"
          objectFit="cover"
          fill
        />
        <SearchImovel />
      </div>
    </div>
  );
}
