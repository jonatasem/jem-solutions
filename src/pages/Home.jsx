import '../styles/Home.css';

import imgInstagram from '../assets/img/instagram.svg';
import imgFacebook from '../assets/img/facebook.svg';

export default function Home(){
    return (
      <>
        <section className="container-home">
          <article className="home-left">
            <h1>Serviços</h1>
            <ul className="servicos-list">
                <li>Limpeza de Computadores</li>
                <li>Formatação de Computadores</li>
                <li>Instalação de Software</li>
                <li>Remoção de Vírus e Malware</li>
                <li>Manutenção Preventiva</li>
                <li>Recuperação de Dados</li>
                <li>Upgrade de Hardware</li>
                <li>Consultoria de TI</li>
                <li>Suporte Técnico Remoto</li>
                <li>Montagem de Computadores Sob Encomenda</li>
            </ul>
          </article>
          <article className='home-right'>
            <h1>Computadores e Notebook</h1>
            <h2>para usuários e entusiastas</h2>
            <h3>O desempenho que você precisa para o seu equipamento.</h3>
            <a href="#orcamento">
              FAÇA UM ORÇAMENTO GRATUITO
            </a>
            <div className="redes-sociais">
              <ul>
                <li>
                  <img src={imgInstagram} alt="" />
                  <a href="https://www.instagram.com/jemsolucoesdigitais/">Instagram</a>
                </li>
                <li>
                  <img src={imgFacebook} alt="" />
                  <a href="https://www.facebook.com/share/18BUSsdyZw/">Facebook</a>
                </li>
              </ul>
              <p>Conecte-se as Nossas Redes Sociais</p>
            </div>
          </article>
        </section>
      </>
    )
  }
  