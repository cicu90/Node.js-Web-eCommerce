
import React, { useContext } from 'react';
import { OrderList } from 'primereact/orderlist';
import ProductsContext from '../../context/ProductsContext';
// import './DashboardProducts.scss';

const DashboardProducts = () => {
    const { products } = useContext(ProductsContext)
    console.log(products);

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="orderlist-demo">
            <div className="card">
                <OrderList value={products} header="List of Products" dragdrop listStyle={{height:'auto'}} dataKey="id"
                    itemTemplate={itemTemplate}></OrderList>
            </div>
        </div>
    );
}
export default DashboardProducts;