import './App.css';
import CardRedeao from '../../components/CardRedeao';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="Main">
           <div className='card'>
           <CardRedeao/>
           </div>
           <div className='card'>
           <CardRedeao/>

           </div><div className='card'>
           <CardRedeao/>

</div><div className='card'>

<CardRedeao/>
</div>
       
    </div>
  );
}

export default App;
