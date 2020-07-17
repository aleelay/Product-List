import React from 'react';

const ProductDetail = ({ product }) => {
  if(!product) {
    return <div></div>
  };
  return(
    <div className="ProductDetail">
      
      
      <div className="product-name">{product.productName}</div>
      <span className="product-price">${product.price}</span>
      <p>{product.description}</p>
      
      

    </div>
  );
}

export default ProductDetail;