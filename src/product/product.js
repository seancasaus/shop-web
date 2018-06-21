import React, {Component} from 'react'; //importing Component from React package
import './product.css';
import DataService from '../services/data-services';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

//constants
let ds = new DataService();
let ns = new NotificationService();

//Create a class that inherits features from React Component
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {onWishList: ds.itemOnWishList()};

    //bind functions
    this.onButtonClicked = this.onButtonClicked.bind(this);
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

  //listen for change in state and refresh
  onWishListChanged(newWishList) {
    this.setState({onWishList: ds.itemOnWishList(this.props.product)});
  }

  onButtonClicked = () => {
    //console.log('clicked');
    if(this.state.onWishList) {
      ds.removeWishListItem(this.props.product);
    }else {
      ds.addWishListItem(this.props.product);
    }
  }

  //show component on screen
  render() {
    //button class for styling
    var btnClass;

    //if item is in wishlist make it's button red
    if(this.state.onWishList) {
      btnClass = "btn btn-danger";
    } else {
      btnClass = "btn btn-primary";
    }

    //return a div
    return (
      //html
      <div className="card product">
          <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
          <div className="card-block">
              <h4 className="card-title">{this.props.product.title}</h4>
              <p className="card-text">Price: ${this.props.product.price}</p>
              <a href="#" onClick={() => this.onButtonClicked()} className={btnClass}>
                {this.state.onWishList ? "Remove From WishList" : "Add To Cart"}
              </a>
          </div>
      </div>
    );
  }
}

export default Product;
