import React, {Component} from 'react'; //importing Component from React package
import './wishlist.css';
import DataService from '../services/data-services';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

let ns = new NotificationService();

//Create a class that inherits features from React Component
class WishList extends Component {
  constructor(props) {
    super(props);

    this.state = {wishList:[]};

    //bind functions
    this.createWishList = this.createWishList.bind(this);
    this.onWishListChanged = this.onWishListChanged.bind(this);
  }

  //add observer when compnent mounts
  componentDidMount() {
    //console.log('got to compnent mount');
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
  }

  //remove observer when compnent unmounts
  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  //reset renderer
  onWishListChanged(newWishList) {
    //console.log('wishlist changed');
    this.setState({wishList: newWishList})
  }

  createWishList = () => {
    const list = this.state.wishList.map((product) =>
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
