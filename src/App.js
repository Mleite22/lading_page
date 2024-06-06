import './App.css';
// Minhas importações
import HeaderPage from "./components/header/HeaderPage";


function App() {
  return (
    <div className="container">

      <header>  
        <HeaderPage />
      </header>
      <main>
        {/* Inicio Banner  */}
        <section className='box-banner'>
          <h1>Olá Marcos</h1>
          <p>Conteúdo, foto e titulo</p>
        </section>
        {/* Inicio Conheça nosso trabalho  */}
        <section className='conheca-trabalhos'>
          <h3>| Conheça os nossos trabalhos</h3>
          <p>Cardes de fotos</p>
        </section>
        {/* Inicio Trabalho em destaques  */}
        <section className='trabalhos-destaques'>
          <h3>| Trabalhos em destaques</h3>
          <p>Cardes de fotos</p>
        </section>
        {/* Inicio Depoimentos  */}
        <section className='depoimentos'>
          <h3>| O que nosso clientes dizem sobra nós</h3>
          <p>Cardes de depoimentos</p>
          <div className='card-depoimento'>
            <p>Aumente a credibilidade do seu produto ou serviço inserindo os depoimentos
              dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento
              de outras pessoas que já o experimentaram é inestimável.
            </p>
            <div className='nome-cliente'>
              <p>Ariane Silva</p>
            </div>
          </div>
          <div className='card-depoimento'>
            <p>Aumente a credibilidade do seu produto ou serviço inserindo os depoimentos
              dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento
              de outras pessoas que já o experimentaram é inestimável.
            </p>
            <div className='nome-cliente'>
              <p>Roberto Castro</p>
            </div>
          </div>
          <div className='card-depoimento'>
            <p>Aumente a credibilidade do seu produto ou serviço inserindo os depoimentos
              dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento
              de outras pessoas que já o experimentaram é inestimável.
            </p>
            <div className='nome-cliente'>
              <p>Samuel carlos</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
