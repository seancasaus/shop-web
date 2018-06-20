import React, {Component} from 'react'; //importing Component from React package
import './product.css';
import DataService from '../services/data-services';

let ds = new DataService();

//Create a class that inherits features from React Component
class Product extends Component {
  constructor(props) {
    super(props);

    //bind functions
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked = () => {
    console.log('clicked');
    ds.addWishListItem(this.props.product);
  }

  //show component on screen
  render() {
      //return a div
      return (
          //html
          <div className="card product">
              <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
              <div className="card-block">
                  <h4 className="card-title">{this.props.product.title}</h4>
                  <p className="card-text">Price: ${this.props.product.price}</p>
                  <a href="#" onClick={() => this.onButtonClicked()} className="btn btn-primary">Add to Wishlist</a>
              </div>
          </div>
      );
  }
}

export default Product;
