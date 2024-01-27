import './App.css';


function App() {

  let tempoAtual = 0;
    let cronometro;

    function iniciarCronometro() {
        cronometro = setInterval(() => {
            tempoAtual++;
            exibirTempo();
            salvarTempo();
        }, 1000);
    }

    function pausarCronometro() {
        clearInterval(cronometro);
        salvarTempo();
        exibirMensagem();
    }

    function zerarCronometro() {
        tempoAtual = 0;
        exibirTempo();
        salvarTempo();
    }

    function exibirTempo() {
        const horas = Math.floor(tempoAtual / 3600);
        const minutos = Math.floor((tempoAtual % 3600) / 60);
        const segundos = tempoAtual % 60;
        document.getElementById('cronometro').innerText = `${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`;
    }

    function formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }

    function salvarTempo() {
        localStorage.setItem('tempoSalvo', tempoAtual);
    }

    function carregarTempoSalvo() {
        const tempoSalvo = localStorage.getItem('tempoSalvo');
        if (tempoSalvo !== null) {
            tempoAtual = parseInt(tempoSalvo);
            iniciarCronometro(); // Continua o cronômetro quando a página é carregada
        }
    }

    function exibirMensagem() {
        const minutosEstudados = Math.floor(tempoAtual / 60);
        const mensagem = `Você estudou por ${minutosEstudados} minutos. Parabéns!`;
        document.getElementById('mensagem').innerText = mensagem;
    }

  return (
    <>
    <div class="message">
        <p>Explore o poder do tempo dedicado ao estudo e veja suas habilidades e conhecimentos expandirem. Cada segundo conta, cada minuto é uma oportunidade para se aproximar dos seus objetivos educacionais. Aproveite esta jornada de aprendizado e transforme o tempo em uma ferramenta valiosa para o seu sucesso! 📚🕒✨</p>
    </div>
    <div class="card">
        <h1>Cronômetro</h1>
        <div id="cronometro">00:00:00</div>
        <button onClick={()=>{iniciarCronometro()}}>Iniciar</button>
        <button onclick="pausarCronometro()">Pausar</button>
        <button onclick="zerarCronometro()">Zerar</button>
        <div id="mensagem"></div>
    </div>

    </>
  );
}

export default App;
