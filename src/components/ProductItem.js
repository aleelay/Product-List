import React from 'react';

const ProductItem = ({product, onProductSelect}) => {
  return(
    <div className="ProductItem">
      <div className="productItem-title">{product.productName}</div>
      <br /><div className="ProductItem-see" onClick={() => onProductSelect(product)}>See details</div>
    </div>
  );
}

export default ProductItem;