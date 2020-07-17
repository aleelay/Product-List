import React from 'react';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';


class App extends React.Component{
  state = {
    selectedProduct: null
  };

  onProductSelect = (product) => {
    this.setState({selectedProduct: product})
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