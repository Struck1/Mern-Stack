import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

function HomePage() {
  return (
    <div>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;
