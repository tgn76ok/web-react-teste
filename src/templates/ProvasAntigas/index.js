import './App.css';
import Cards from '../../components/cardProvas';


function App() {
  return (
    <section className="Prova-main">

      <h1>Enem Impresso</h1>

        <h2>2023</h2>
        <div className='Prova-main-Ano'>

          <div className='Prova-main-card' >


          <h4>Dia 1</h4>

            <div className='Prova-main-card-conteudo'>
                <Cards Dia={1} Caderno={1} LinkProva={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"} linkGabarito={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"}/>


                <Cards Dia={1} Caderno={2} LinkProva={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"} linkGabarito={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"}/>
                <Cards Dia={1} Caderno={2} LinkProva={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"} linkGabarito={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"}/>


            </div>

          
          </div>

          <div className='Prova-main-card' >


          <h4>Dia 2</h4>

            <div className='Prova-main-card-conteudo'>
                <Cards Dia={1} Caderno={1} LinkProva={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"} linkGabarito={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"}/>


                <Cards Dia={1} Caderno={2} LinkProva={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"} linkGabarito={"https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf"}/>

            </div>

            
          </div>
        

        </div>
        




        <div>
  
          <h2>2022</h2>
          <div>
            <a href="EnemImpresso/2022_PV_impresso_D1_CD1.pdf" download>ENEM impresso 2022 (caderno azul)</a>
            <a href="EnemImpresso/2022_GB_impresso_D1_CD1(gabarito).pdf" download>Gabarito ENEM impresso 2022 (caderno azul)</a>

          </div>
        </div>
       
        <div>

          <h2>2021</h2>
          <div>

            <a href="EnemImpresso/2021_PV_impresso_D1_CD1.pdf" download>ENEM impresso 2021 (caderno azul)</a>
            <a href="EnemImpresso/2021_GB_impresso_D1_CD1.pdf" download>Gabarito ENEM impresso 2021 (caderno azul)</a>
          </div>
        </div>

        <div>

          <h2>2020</h2>
          <div>

            <a href="EnemImpresso/2020_PV_impresso_D1_CD1.pdf" download>ENEM impresso 2020 (caderno azul)</a>
            <a href="EnemImpresso/2020_GB_impresso_D1_CD1.pdf" download>Gabarito ENEM impresso 2020 (caderno azul)</a>
          </div>
        </div>


        
    </section>

  );
}

export default App;
