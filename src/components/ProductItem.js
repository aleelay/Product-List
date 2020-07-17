import React from 'react';

const ProductItem = ({product, onProductSelect}) => {
  return(
    <div onClick={() => onProductSelect(product)}>
      Item
      {product.productName}
    </div>
  );
}

export default ProductItem;