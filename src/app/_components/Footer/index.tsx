import Link from "next/link";
import "./styles.css";

function Footer() {
  return (
    <footer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-around py-9 px-4 bg-neutral explode-width-footer">
      <section>
        <h3>Empresa</h3>
        <Link href="/institucional">Institucional</Link>
        <Link href="/social">Social</Link>
        <Link href="/ambiental">Ambiental</Link>
      </section>
      <section>
        <h3>Projetos</h3>
        <a>AM Figueiras </a>
        <a>AM Laura</a>
        <a>Taste Residencial</a>
        <a>Sense Residencial</a>
      </section>
      <section>
        <h3>Canal de vendas</h3>
        <a>WhatsApp</a>
        <a>E-mail</a>
      </section>
      <section>
        <h3>Contato</h3>
        <p>WeWork - Av. Pereira Barreto, 1479, Baeta Neves</p>
        <p>São Bernardo do Campo, SP 09751-000</p>
        <p>11 98306-4040</p>
      </section>
    </footer>
  );
}
export default Footer;
