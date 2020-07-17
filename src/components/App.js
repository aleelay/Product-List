import React from 'react';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';


class App extends React.Component{
  state = {
    selectedProduct: null
  };

  onProductSelect = (product) => {
    this.setState({selectedProduct: product})
    console.log(product.productName)
    console.log("here onProductSelect");
    console.log("State: ", this.state.selectedProduct);
  };

  render(){
    

    return(
      <div>
        App
        <ListProduct onProductSelect={this.onProductSelect}/>
        <ProductDetail product={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;