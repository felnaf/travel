import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getPackageData } from '../actions';

const Packages = () => {
  const dispatch = useDispatch();
  const { data, userLoggedIn } = useSelector((state) => state.postReducer);
  

  useEffect(() => {
    dispatch(getPackageData());
  }, []);

  return (
    <div className="mt-5">
      <div className="package-display">
        {data.map((d, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={d.image} />
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
           
              <Button variant="warning" as={Link} to={`/view-package/${d.id}`}>
                View
              </Button>

              {userLoggedIn ? (
                <Button variant="success" as={Link} to={'/checkout'} className="checkout-btn">
                  Checkout
                </Button>
              ) : (
                ''
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Packages;
