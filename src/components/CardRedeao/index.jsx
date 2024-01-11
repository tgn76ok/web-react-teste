import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  return (
    <Card style={{ width: '25rem' }}>
        <Card.Header>Rodrigo Junqueira, de São Paulo (SP)</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Introdução</Card.Title>
        <Card.Text>
        No livro "Ideias para Adiar o Fim do Mundo", Ailton Krenak critica o distanciamento entre a população brasileira como um todo e a natureza, o que não se aplica às comunidades indígenas. Tal pensamento é extremamente atual, já que não só indígenas como todas as populações tradicionais têm uma relação de respeito mútuo com a natureza, aspectos que as diferenciam do resto dos brasileiros. Com isso, a agressão ao meio ambiente e o apagamento dos saberes ancestrais configuram desafios para a valorização de comunidades e povos tradicionais no Brasil.
        </Card.Text>
      
        
      </Card.Body>
      
      
    </Card>
  );
}

export default KitchenSinkExample;