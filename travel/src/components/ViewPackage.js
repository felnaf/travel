import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { viewPackageData } from '../actions';
import { Link } from 'react-router-dom';

const ViewPackage = () => {
  useEffect(() => {
    if (id) {
      dispatch(viewPackageData(id));
    }
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { viewData } = useSelector((state) => state.postReducer);

  return (
    <div>
      <div>
        <Button
          as={Link}
          to={'/packages'}
          variant="primary"
          className="back_btn"
        >
          Back
        </Button>
      </div>
      <div className="container">
        <Card style={{ width: '18rem' }} className="mb-4 view_card">
          <Card.Img variant="top" src={`/${viewData?.image}`} />
          <Card.Body>
            <Card.Text>TiTle:{viewData?.title}</Card.Text>
            <Card.Text>Price:${viewData?.price}</Card.Text>
            <Card.Text>Description:{viewData?.description}</Card.Text>
          
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ViewPackage;
