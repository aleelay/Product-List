import React from 'react';
import ProductItem from './ProductItem';
import { ProductsList } from '../data';

const ListProduct = ({onProductSelect}) => {
  const products = ProductsList.map((product, key) => {
    return <ProductItem onProductSelect={onProductSelect} key={key} product={product} />
  });

  return(
  <div>
    {products}
    
  </div>
  );

}

export default ListProduct;