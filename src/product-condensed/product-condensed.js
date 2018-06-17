import React, {Component} from 'react'; //importing Component from React package
import './product-condensed.css';

//Create a class that inherits features from React Component
class ProductCondensed extends Component {
    //show component on screen
    render() {
        //return a div
        return (
            //html
            <li className="list-group-item pc-condensed">
              <div className="row">
                <a className="btn btn-outline-danger">X</a>
                <p>{this.props.product.title}  |  <b>${this.props.product.price}</b></p>
              </div>
            </li>
        );
    }
}

export default ProductCondensed;
