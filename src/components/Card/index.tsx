import { Section } from "./styles";
export interface ICard {
  nome: string
  endereco: string
  preco: string
  area: string
  descricao: string
  img: string
}
export const Card = ({ nome, endereco, preco, area, descricao, img }: ICard) => {
  return (
    <Section>
      <aside>
        <h4>{nome}</h4>
      </aside>
      <aside>
        <p>{endereco}</p>
      </aside>
      <div>
        <h4>Valor do aluguel: </h4>
        <p>{preco}</p>
      </div>
      <div>
        <h4>Área: </h4>
        <p>{area}</p>
      </div>
      <div>
        <h4>Descrição: </h4>
        <text>{descricao}</text>
      </div>
      <aside>
        <img src={img} alt="Apartamento" />
      </aside>
      <div>
        <h5>Ler mais...</h5>
      </div>
    </Section>
  );
};
