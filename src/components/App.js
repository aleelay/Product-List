import React from 'react';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';
import './ProductList.css';


class App extends React.Component{
  state = {
    selectedProduct: null
  };

  onProductSelect = (product) => {
    this.setState({selectedProduct: product})
  };

  render(){
    

    return(
      <div className="ProductList">
        <h4 className="title">Product List</h4>
        <div className="list-container">
          <div className="list-item">
            <ListProduct onProductSelect={this.onProductSelect}/>
          </div>
          <div className="list-item">
            <ProductDetail product={this.state.selectedProduct} />
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;