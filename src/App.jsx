import { useState, useEffect } from "react";
import "./index.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../imgs/logo.svg";
import animation from "../imgs/animation.json";
import Forms from "./components/forms/formss";
import Feature from "./components/features/features";
import Slide from "./components/slide/slide";
import Faq from "./components/faq/faq";
import Depoimento from "./components/depoimento/depoimentos";
import { FunctionAux } from "./components/helpers/help";

function App() {
  return (
    <>
      <header>
        <div className="rowww">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <button>
              <FaWhatsapp />
              ENTRE EM CONTATO
            </button>
          </nav>
        </div>

        <div className="headerBootom">
          <div className="colum">
            <h1>
              Transforme sua ideia em um <span>aplicativo de sucesso!</span>
            </h1>
            <p>
              Bem-vindo à Nexus Development, onde transformamos ideias
              inovadoras em aplicativos de sucesso. Se você tem uma visão
              incrível para um aplicativo móvel, mas não sabe por onde começar,
              você está no lugar certo. Nossa equipe de especialistas em
              desenvolvimento de aplicativos está pronta para ajudá-lo a
              transformar sua ideia em realidade.
            </p>
            <button>Mais Informações</button>
          </div>

          <Forms />
        </div>
      </header>

      <section className="feature">
        <h1>Nossos Serviços</h1>

        <div className="listServicos">
          <Feature index={1} />
          <Feature index={2} />
          <Feature index={3} />
          <Feature index={4} />
        </div>
      </section>

      <section className="appsemdestaque">
        <h1>
          Esses clientes decidiram <br /> <span>CONFIAR NA NEXUS</span>
        </h1>

        <Slide />
      </section>

      <section className="faques">
        <h1>
          Porque escolher a <b>NEXUS ?</b>
        </h1>

        <div className="faqsrow">
          <div className="faqs">
            <Faq
              title={`Escopo inicial`}
              index={"01"}
              content={`A Nexus entenderá os objetivos e expectativas do seu negócio, reunindo um time de analistas experientes que definirão o escopo do projeto. Aqui, estabelecemos tudo o que é esperado do seu software personalizado, suas funcionalidades, tecnologias e quais problemas ele deve solucionar.`}
            />
            <Faq
              title={`Planejamento`}
              index={"02"}
              content={`Negócio fechado? Chegou a hora de estruturar o plano de ação com as etapas de trabalho, os prazos e critérios de aprovação. Baseado nesse plano, criamos um cronograma para definir as datas de entrega de cada etapa, e organizar as atividades de acordo com as prioridades do projeto.`}
            />
            <Faq
              title={`Desenvolvimento`}
              index={"03"}
              content={`Nessa fase do projeto, o time de desenvolvedores da Nexus trabalha, além da parte de códigos, na segurança do software, na sua qualidade e na escalabilidade do projeto como um todo. Todas as etapas seguem uma metodologia ágil de produção, com tarefas bem definidas e prazos bem estabelecidos.`}
            />
            <Faq
              title={`Entregas`}
              index={"04"}
              content={`Aqui o seu software começa a ganhar forma! De acordo com o que for definido no planejamento do projeto, essa etapa pode ser feita em uma única entrega, ou de forma contínua, onde as funcionalidades são entregues conforme são desenvolvidas. Durante todo o processo são feitas todas as configurações e ajustes necessários.`}
            />
            <Faq
              title={`Evolução`}
              index={"05"}
              content={`Com o software pronto e em uso, o próximo passo é manter ele atualizado e incrementar novos recursos conforme se der a necessidade. Esta etapa é responsável por garantir que o sistema continuará atual e satisfazendo todas as demandas que a empresa tem conforme ela cresce.`}
            />
          </div>

          <img
            src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2396/VD_DOTA2.png"
            alt=""
          />
        </div>
      </section>

      <section className="depoimentos">
        <h1>
          O que nossos cliente falam <b>SOBRE NÓS</b>
        </h1>

        <div className="scroll">
          {FunctionAux.SetScrollDepoimentos()}
          <Depoimento
            title={"JORNAL DHOJE"}
            img={
              "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fjornaldhojeinterior.cdn.bubble.io%2Ff1682426769974x376241175596089000%2Flogo.png?w=384&h=112&auto=compress&dpr=1&fit=max"
            }
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          />
          <Depoimento
            title={"ARENAPRO"}
            img={
              "https://a43c6b50521f91731ab121c587c06489.cdn.bubble.io/f1683033037659x835565622524000300/1%201.svg"
            }
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          />
          <Depoimento
            title={"KAMALLEON"}
            img={
              "https://11f85bac41e97e142e04811ada5f5930.cdn.bubble.io/f1678288234541x788282298434801700/3%20%281%29%201%20%28Traced%29.svg"
            }
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          />
          <Depoimento
            title={"CADASTRANDOWEB"}
            img={
              "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3f5cc18477f7eb9bdc79fcbde2911b43.cdn.bubble.io%2Ff1685476111704x592723281566275500%2Flogo-cw1.png?w=&h=&auto=compress&dpr=1&fit=max"
            }
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          />
        </div>
      </section>

      <footer>


        <div className="columnFooter">

          <span>Sobre a Empresa</span>

          <img src={logo} alt="" />
          <p>Somos uma SoftwareHouse focada em entregar resultado</p>


        </div>
        <div className="columnFooter">

          <span>Links Úteis</span>

          <a href="#">Home</a>
          <a href="#">Contato</a>
          <a href="#">Formulário</a>


        </div>
        
        <div className="columnFooter">

          <span>Projetos</span>

          <a href="#">Kamalleon</a>
          <a href="#">ArenaPro</a>
          <a href="#">Dhoje</a>
          <a href="#">Formulário</a>


        </div>
        <div className="columnFooter">

          <span>Se inscreva</span>

          <label htmlFor="">
            Email
            <input type="email" placeholder="Digite seu melhor email" />
            <button>ENVIAR</button>
          </label>


        </div>


        
      </footer>
    </>
  );
}

export default App;
