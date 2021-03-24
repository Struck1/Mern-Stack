import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-2 p-3'>
      <Card.Img variant='top' src={product.image} />
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
