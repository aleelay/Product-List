import React from 'react';

const ProductItem = ({product, onProductSelect}) => {
  return(
    <div className="ProductItem">
      {product.productName}
      <br /><div className="see_details" onClick={() => onProductSelect(product)}>See details</div>
    </div>
  );
}

export default ProductItem;