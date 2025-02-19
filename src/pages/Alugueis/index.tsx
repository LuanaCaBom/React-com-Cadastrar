import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Alugueis() {
  return (
    <>
    <S.Paragrafo>Aluguéis Disponíveis</S.Paragrafo>
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          nome={item.nome}
          endereco={item.endereco}
          preco={item.preco}
          area={item.area}
          descricao={item.descricao}
          img={item.img}
        />
      ))}
    </S.Section>
    </>
  )
}
