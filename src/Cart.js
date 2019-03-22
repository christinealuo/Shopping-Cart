import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"; // import child component
import Data from "./Data.js"
import ProductData from "./Data.js";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            {ProductData.products.map(product => (
              <Product productName={product.name} price={product.cost} limit={product.stock}/>
            ))}
        </div>
    );
  }

}

export default Cart;
