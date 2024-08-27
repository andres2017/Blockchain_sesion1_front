import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  // Ejemplo de publicaciones de blog
  const posts = [
    {
      id: 1,
      title: 'Introducción a la Blockchain',
      description: 'Descubre los fundamentos de la tecnología blockchain y cómo está revolucionando diversas industrias.',
      imageUrl: 'https://via.placeholder.com/300', // Puedes reemplazar con la ruta de una imagen real
    },
    {
      id: 2,
      title: 'Aplicaciones de Blockchain en el Mundo Real',
      description: 'Explora casos prácticos de uso de blockchain en sectores como finanzas, salud, y logística.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Seguridad en Blockchain: Mitos y Realidades',
      description: 'Conoce los aspectos de seguridad de la blockchain y los desafíos actuales.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Blog sobre Blockchain</h1>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
