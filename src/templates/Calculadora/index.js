import './App.css';
import Carousel from '../../components/Carousel';
import HeaderG from '../../components/HeaderG';

function App() {
  return (
    <div className="main-notas">

      <div class="notas">
        <h1>Simule sua nota:</h1>
        <form id="notaForm">
            <label for="Nota1" className='Label-notas'>Sua nota em Linguagens, Códigos e suas Tecnologias:</label>
            <input type="number" name="Nota1" className='input-notas'/>

            <label for="Nota2" className='Label-notas'>Sua nota em Ciências da Natureza:</label>
            <input type="number" name="Nota2" className='input-notas'/>

            <label for="Nota3" className='Label-notas'>Sua nota em Ciências Humanas:</label>
            <input type="number" name="Nota3" className='input-notas'/>

            <label for="Nota4" className='Label-notas'>Matemática e suas tecnologias:</label>
            <input type="number" name="Nota4" className='input-notas'/>

            <label for="Nota5" className='Label-notas'> Sua nota em Redação:</label>

            <input type="number" name="Nota5" className='input-notas'/>
            <button type="button" id="calcularButton">Calcular Nota</button>
            <div id="resultado" class="resultado"></div>

        </form>
        
    </div>
    </div>

  );
}

export default App;
