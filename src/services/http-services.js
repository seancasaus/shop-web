import 'whatwg-fetch'; //used for making web requests

class HttpService {
    //gets products from mongo database
    getProducts = () => {
        fetch('http://localhost:3000/product').then(res => {
            console.log(res.json());
            
        });
    };
};

//exports json file
export default HttpService;
