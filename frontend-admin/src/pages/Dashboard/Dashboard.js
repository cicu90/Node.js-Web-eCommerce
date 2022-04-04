import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';
import ProductsContext from '../../context/ProductsContext'
import ProductList from '../../components/DashboardProducts/DashboardProducts';
const Dashboard = () => {

  const { initialValue } = useContext(ProductsContext);
  useEffect(()=>{
    initialValue()
},[])
  
  return (<div className={styles.Dashboard}>
    <ProductList/>
  </div>)
};

export default Dashboard;
