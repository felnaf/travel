import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { viewOfferData } from '../actions';

const ViewOffer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { viewOffer } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(viewOfferData(id));
  },[]);

  return (
    <div>
      <div>
        <Button
          as={Link}
          to={'/offers'}
          variant="primary"
          className="back_btn"
        >
          Back
        </Button>
      </div>
      <div className="container">
        <Card style={{ width: '18rem' }} className="mb-4 view_card">
          <Card.Img variant="top" src={`/${viewOffer?.image}`} />
          <Card.Body>
            <Card.Text>Title:{viewOffer?.title}</Card.Text>
            <Card.Text>Offer-Price:${viewOffer?.offerprice}</Card.Text>
            <Card.Text>Description:{viewOffer?.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ViewOffer;
