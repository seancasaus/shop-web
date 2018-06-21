import React, {Component} from 'react'; //importing Component from React package
import './product-condensed.css';
import DataService from '../services/data-services';

//constants
let ds = new DataService();

//Create a class that inherits features from React Component
class ProductCondensed extends Component {

  constructor(props) {
    super(props);

    //bind functions
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct = () => {
    ds.removeWishListItem(this.props.product);
  }


  //show component on screen
  render() {
    //return a div
    return (
      //html
      <li className="list-group-item pc-condensed">
        <div className="row">
          <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
          <p>{this.props.product.title}  |  <b>${this.props.product.price}</b></p>
        </div>
      </li>
    );
  }
}

export default ProductCondensed;
