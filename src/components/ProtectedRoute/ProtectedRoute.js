import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Element, isLoggedIn, ...props}) {
  return (
    <>
      {isLoggedIn ? <Element isLoggedIn={isLoggedIn} {...props} /> : <Navigate  to='/' />}
    </>
  );
}

export default ProtectedRoute; 