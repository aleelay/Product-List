import React from 'react';

const ProductDetail = ({ product }) => {
  if(!product) {
    return <div></div>
  };
  return(
    <div className="ProductDetail">
      <image></image>
      Product Detail
      {product.description}

    </div>
  );
}

export default ProductDetail;