import './App.css';

function App() {
  return (
  <div className="App">
      <section className='Assunto-titulo'>
        <h1>Sumário dos Tópicos mais Relevantes no ENEM</h1>
    </section>

    <ul class="disciplinas">
        <li class="disciplina">Linguagens, Códigos e suas Tecnologias
            <h4 className='titulo_assunto'>Português e Literatura</h4>
            <ul class="itens">
                <li>Interpretação de textos (33,3%)</li>
                <li>Tendências contemporâneas (28%)</li>
                <li>Estrutura e formação das palavras (21%)</li>
                <li>Tipos de texto (19%)</li>
                <li>Análise da pessoa, do espaço e do tempo (14%)</li>
                <li>Funções da linguagem (13%)</li>
                <li>Pontuação (10%)</li>
                <li>Narratividade (9%)</li>
                <li>Literatura (7,8%)</li>
                <li>Classe de palavras (7%)</li>
                <li>Verbo (7%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Inglês</h4>
            <ul class="itens">
                <li>Interpretação de Textos (51,3%)</li>
                <li>Domínio Lexical (14,8%)</li>
                <li>Identificação de Função do Texto (6,1%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4  className='titulo_assunto'> Espanhol</h4>
            <ul class="itens">
                <li>Interpretação de Textos (52,2%)</li>
                <li>Domínio Lexical (14,8%)</li>
                <li>Identificação de Função do Texto (6,1%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4  className='titulo_assunto'>Artes</h4>
            <ul class="itens">
                <li>Arte Contemporânea (60%)</li>
                <li>Arte nos séculos XV e XVI (10%)</li>
                <li>Elementos básicos das Artes Plásticas (10%)</li>
                <li>Elementos básicos de Música (10%)</li>
                <li>Música no século XX (5%)</li>
            </ul>
        </li>
    </ul>

    <ul class="disciplinas">
        <li class="disciplina">Ciências Humanas e suas Tecnologias
            <h4 className='titulo_assunto'>História</h4>
            <ul class="itens">
                <li>Idade Contemporânea (17,7%)</li>
                <li>2ª Guerra Mundial e suas consequências (13,6%)</li>
                <li>Brasil Colônia (12,7%)</li>
                <li>Primeiro e Segundo Reinado (12,3%)</li>
                <li>Governos pós-regime militar - Redemocratização (12,3%)</li>
                <li>Era Vargas (11,1%)</li>
                <li>História Política (10,5%)</li>
                <li>República Velha (9,9%)</li>
                <li>Patrimônio Histórico-Cultural e Memória (7,8%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Geografia</h4>
            <ul class="itens">
                <li>Geografia Agrária (18,1%)</li>
                <li>Questões Ambientais (15,5%)</li>
                <li>Geografia Física (10,9%)</li>
                <li>Geografia Urbana (10,4%)</li>
                <li>Climatologia (10,4%)</li>
                <li>Urbanização (10,4%)</li>
                <li>Globalização (9,1%)</li>
                <li>Cartografia (6,5%)</li>
                <li>Indústria (6,5%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Filosofia</h4>
            <ul class="itens">
                <li>Aristóteles e escola helenística (18,8%)</li>
                <li>Ética e Justiça (18,7%)</li>
                <li>Racionalismo moderno (18,8%)</li>
                <li>Filosofia Antiga (16,8%)</li>
                <li>Escola sofística, Sócrates e Platão (12,5%)</li>
                <li>Filosofia Contemporânea (12,4%)</li>
                <li>Filosofia Moderna (11,6%)</li>
                <li>Escola de Frankfurt (9,4%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Sociologia</h4>
            <ul class="itens">
                <li>Sociologia contemporânea (28,6%)</li>
                <li>Mundo do Trabalho (21,9%)</li>
                <li>Cultura e Indústria Cultural (12,9%)</li>
                <li>Ideologia (11,6%)</li>
                <li>Meios de Comunicação, Tecnologia e Cultura de Massa (11,6%)</li>
                <li>Cidadania (10,3%)</li>
                <li>Capitalismo (7,1%)</li>
                <li>Economia e sociedade (7,1%)</li>
            </ul>
        </li>
    </ul>

    <ul class="disciplinas">
        <li class="disciplina">Ciências da Natureza e suas Tecnologias
            <h4 className='titulo_assunto'>Química</h4>
            <ul class="itens">
                <li>Físico-Química (27,0%)</li>
                <li>Química Geral (26,8%)</li>
                <li>Química Orgânica (19,2%)</li>
                <li>Ligações químicas, polaridade e forças (13,4%)</li>
                <li>Reações orgânicas (11%)</li>
                <li>Compostos orgânicos (9,8%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Física</h4>
            <ul class="itens">
                <li>Mecânica (30,9%)</li>
                <li>Eletricidade e Energia (25,8%)</li>
                <li>Ondulatória (18%)</li>
                <li>Termologia (17,1%)</li>
                <li>Acústica (11%)</li>
                <li>Energia, trabalho e potência (8,2%)</li>
                <li>Resistores (8,2%)</li>
                <li>Calorimetria (5,5%)</li>
                <li>Impulso, quantidade de movimento e análise dimensional (5,5%)</li>
                <li>Introdução à óptica geométrica (5,5%)</li>
            </ul>
        </li>
        <li class="disciplina">
            <h4 className='titulo_assunto'>Biologia</h4>
            <ul class="itens">
                <li>Humanidade e Ambiente (19,5%)</li>
                <li>Citologia (11,5%)</li>
                <li>Histologia e Fisiologia (11,5%)</li>
                <li>Sistema imunológico (9,9%)</li>
                <li>Ecossistemas (8,5%)</li>
                <li>Fundamentos da ecologia (8,3%)</li>
                <li>Biotecnologia (8,1%)</li>
                <li>DNA e RNA (5,6%)</li>
                <li>Genética (5,6%)</li>
            </ul>
        </li>
    </ul>

    <ul class="disciplinas">
        <li class="disciplina">Matemática e suas Tecnologias
            <h4 className='titulo_assunto'>Matemática</h4>
            <ul class="itens">
                <li>Geometria (22,5%)</li>
                <li>Equação do Primeiro Grau e Equação do Segundo Grau (17%)</li>
                <li>Escalas, Razão e Proporção (14,2%)</li>
                <li>Grandezas proporcionais e médias algébricas (14%)</li>
                <li>Aritmética (11,8%)</li>
                <li>Porcentagem e matemática financeira (11%)</li>
                <li>Gráficos e Tabelas (9,1%)</li>
                <li>Funções (8,7%)</li>
                <li>Noções básicas de estatística (6%)</li>
                <li>Probabilidade (6%)</li>
                <li>Área de figuras planas e Área dos polígonos (5%)</li>
            </ul>
        </li>
            <ul class="disciplinas"></ul>
              <li class="disciplina">
                  
                  <h4 className='titulo_assunto'>Dicas de Youtubers:</h4>
                  <div class="dicas">
                    <a href="https://www.youtube.com/@ProfessorNoslen">Linguagens</a><br/>
                    <a href="https://www.youtube.com/@professorferretto">Matemática</a><br/>
                    <a href="https://www.youtube.com/@paulojubilut">Biologia</a><br/>
                    <a href="https://www.youtube.com/@professorboaro">Química</a><br/>
                    <a href="https://www.youtube.com/@Fisica2.0">Fisica</a>
                    <h4>Dicas de cursinhos:</h4>
                    <a href="https://www.proenem.com.br/">PROENEM</a><br/>
                    <a href="https://descomplica.com.br/super-aulao-enem?utm_source=google&utm_medium=cpc&utm_campaign=google_psq_uee_awareness_gwt-paid-media_topo_conversao_retafinal23_lead_marktech&utm_term=assuntos%20que%20mais%20caem%20no%20enem&utm_content=reta_final&gclid=Cj0KCQjwhfipBhCqARIsAH9msbkTO4YDpW434PG9LPvWjP_RgUlrw9sh4hF8WcvgIP-tAuj-N3HU2dwaAoF7EALw_wcB">DESCOMPLICA</a><br/>
                    <a href="https://www.mesalva.com/app/banco-de-provas/provas-anteriores-enem">MESALVA (OBS:esse site também contém todos as edições das provas anteriores para você baixar e treinar)</a>
                  </div>
              </li>
            </ul>

        </div>
  );
}

export default App;
