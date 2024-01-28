import './App.css';

function App() {
  return (
    <div className="main-notas">
      <div className="notas">
        <h1>Simule sua nota:</h1>
        <form id="notaForm">
          <label htmlFor="Nota1" className='Label-notas'>
            Sua nota em Linguagens, Códigos e suas Tecnologias:
          </label>
          <input
            type="number"
            name="Nota1"
            className='input-notas'
            maxLength="5"
          />

          <label htmlFor="Nota2" className='Label-notas'>
            Sua nota em Ciências da Natureza:
          </label>
          <input
            type="number"
            name="Nota2"
            className='input-notas'
            maxLength="5"
          />

          <label htmlFor="Nota3" className='Label-notas'>
            Sua nota em Ciências Humanas:
          </label>
          <input
            type="number"
            name="Nota3"
            className='input-notas'
            maxLength="5"
          />

          <label htmlFor="Nota4" className='Label-notas'>
            Matemática e suas tecnologias:
          </label>
          <input
            type="number"
            name="Nota4"
            className='input-notas'
            maxLength="5"
          />

          <label htmlFor="Nota5" className='Label-notas'>
            Sua nota em Redação:
          </label>
          <input
            type="number"
            name="Nota5"
            className='input-notas'
            maxLength="5"
          />

          <button
            type="button"
            className="Button-notas"
            id="calcularButton"
          >
            Calcular Nota
          </button>
          <div id="resultado" className="resultado"></div>
        </form>
      </div>
    </div>
  );
}

export default App;
