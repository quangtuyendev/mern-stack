import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    document.title = 'NotFound - MERN';
  }, []);
  return (
    <div className="page-wrap d-flex flex-row align-items-center mt-5">
      <div className="container  mt-5">
        <div className="row justify-content-center  mt-5">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <Link to="/shop" className="btn btn-link">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
