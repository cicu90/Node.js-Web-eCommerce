import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import styles from './PrivateRoute.module.scss';


const PrivateRoute = () => {
  const auth = null; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
  // <div className={styles.PrivateRoute}>
  //   PrivateRoute Component
  // </div>
};

PrivateRoute.propTypes = {};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
