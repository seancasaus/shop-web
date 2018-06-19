import React, {Component} from 'react'; //importing Component from React package
import './wishlist.css';
import DataService from '../services/data-services';
import NotificationService from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

//Create a class that inherits features from React Component
class WishList extends Component {
  constructor(props) {
    super(props);

    this.state = {wishlist:[
      {
        title:"Hello World",
        price:23.99,
        _id:"fdfgdfgsfds"
      },
      {
        title:"World Hellow",
        price:54.99,
        _id:"fdfgfdgfsfds"
      },
      {
        title:"Hi bob",
        price:19.99,
        _id:"fdsfdfdsfds"
      }
    ]}
    //bind functions
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishlist.map((product) =>
      <ProductCondensed product={product} key={product._id} />
    );
    return (list);
  };

    //show component on screen
    render() {
        //return a div
        return (
            //html
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group">
                  {this.createWishList()}
                </ul>
              </div>
            </div>
        );
    }
}

export default WishList;
