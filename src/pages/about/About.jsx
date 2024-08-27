import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import imgblockchain from '../../assets/img/imgblockchain.png';
import './About.css';

const About = () => {
  return (
    <Container>
      <Card className="mb-4 shadow-sm">
        <Card.Img variant="top" src={imgblockchain} className="img-fluid" alt="Imagen sobre Blockchain" />
        <Card.Body>
          <Card.Title className="text-center">¿Qué es la Blockchain?</Card.Title>
          <Card.Text className="text-justify">
            La <strong>blockchain</strong> o cadena de bloques es una tecnología revolucionaria que permite el registro de transacciones de forma descentralizada y segura. A través de un libro mayor distribuido, las transacciones son verificadas y almacenadas en bloques, que están conectados criptográficamente. Esto garantiza la inmutabilidad y transparencia de los datos, facilitando aplicaciones en diversos sectores como las finanzas, la salud, la logística, entre otros.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
