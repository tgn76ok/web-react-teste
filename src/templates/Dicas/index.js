import './App.css';
import CarouselYutube from '../../components/CarouselYutube';


function App() {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <h1 class="introducao">Instruções para a Redação do Enem</h1>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"><section id="introducao">
                <p>A redação do Enem é uma parte importante do exame e exige atenção especial. Abaixo, você encontrará instruções e dicas para escrever uma redação eficaz.</p>
            </section>
    
            <section>
                <h2>Estrutura da Redação</h2>
                <p>A redação do Enem geralmente segue a estrutura de um texto dissertativo-argumentativo. Ela deve conter introdução, desenvolvimento e conclusão. A introdução apresenta o tema e a tese, o desenvolvimento argumenta a favor da tese e a conclusão retoma os principais pontos e apresenta uma proposta de intervenção.</p>
            </section></div>
          </div>
        </div>
            <div class="container">
                <section>
                    <h2>Competências Avaliadas</h2>
                    <p class="paragrafo">A redação do Enem é avaliada com base em cinco competências:</p>
                    <div class="row">
                        <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Competência 1</h5>
                              <p class="card-text">Demonstrar domínio da norma culta da língua escrita.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Competência 2</h5>
                              <p class="card-text">Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo em prosa.</p>
                            </div>
                          </div>
                        </div>
                      
                        <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Competência 5</h5>
                              <p class="card-text">Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Competência 3</h5>
                              <p class="card-text">Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Competência 4</h5>
                              <p class="card-text">Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                </section>
                <section>

                  <h2>Estratégias de Abordagem</h2>
                  <p class="paragrafo">Para escrever uma redação eficaz, siga estas estratégias:</p>
                  <ul>
                      <li>Leia cuidadosamente a proposta de redação e entenda o que é solicitado.</li>

                      <li>Organize suas ideias antes de começar a escrever, criando um esboço do seu texto.</li>

                      <li>Use argumentos consistentes e dados relevantes para sustentar sua tese.</li>

                      <li>Mantenha uma linguagem clara e objetiva.</li>

                      <li>Revise e corrija seu texto, verificando erros gramaticais e de ortografia.</li>
                  </ul>
                  
                  </section>
               
                <div class="caixa">
                <div class="titulo">Vídeos que Farão a Diferença</div>
            </div>
                
                <CarouselYutube/>
        
                
            </div>
          </div>


  );
}

export default App;
