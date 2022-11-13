import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"                
            >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src= {livro.src} key={livro.id} />
                ))}
            </NovosLivrosContainer>
            <div>
                <h3>Talvez você se interesse por...</h3>
                <h4>Angular 11</h4>
                <p>Construindo uma aplicação integrada com a plataforma Google</p>
                <img />
                <button>Saiba mais</button>
            </div>      
        </UltimosLancamentosContainer>
    )    
}

export default UltimosLancamentos