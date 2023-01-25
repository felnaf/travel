import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferData } from '../actions';
import { Link } from 'react-router-dom';

const Offers = () => {
  const dispatch = useDispatch();
  const { offerData } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getOfferData());
  }, []);
  return (
    <div className="mt-5">
      <div className="offer-display">
        {offerData.map((d, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={d.image} />
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>${d.offer}</Card.Text>
              <Button variant="warning" as={Link} to={`/view-offer/${d.id}`}>
                View
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Offers;
