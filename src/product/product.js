import React, {Component} from 'react'; //importing Component from React package
import './product.css';

//Create a class that inherits features from React Component
class Product extends Component {
    //show component on screen
    render() {
        //return a div
        return (
            //html
            <div className="card"> 
                <img className="card-img-top" alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <p className="card-text">Price: $</p>
                    <a href="#" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;
