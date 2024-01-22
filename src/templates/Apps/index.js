import './App.css';
import Carousel from '../../components/Carousel';
import HeaderG from '../../components/HeaderG';

function App() {
  return (
    <div className="App">
      <HeaderG/>
    <section class="container text-center">
        <h1 className='titulo-main'>Bem-vindo à sua Jornada para o Sucesso no ENEM!</h1>
       <br />
        <p>Este é o seu ponto de partida para uma preparação sólida e eficaz no ENEM. Aqui, você terá acesso a ferramentas para calcular sua nota, valiosas dicas de cursinhos e a conveniência de baixar folhas de redação em PDF para aprimorar suas habilidades e atingir o seu melhor desempenho no Exame Nacional do Ensino Médio.</p>
        <p class="inicio">Prepare-se, vamos começar!</p>
        
    </section>
    
    <section class="container text-center mt-3 mb-3 ">
        <a class="botton-main" href="/Assunto">ACESSE AQUI E CONFIRA OS ASSUNTOS QUE MAIS CAEM <br/>NO ENEM E DICAS DE CURSINHOS PARA CADA ÁREA DE CONHECIMENTO</a>
    </section>


    <Carousel/>

    </div>
  );
}

export default App;
