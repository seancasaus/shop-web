import 'whatwg-fetch'; //used for making web requests

class HttpService {
    //gets products from mongo database
    getProducts = () => {
        //called first
        var promise = new Promise((resolve, reject) => { //used to ensure a response from the server 
            //called second 
            fetch('http://localhost:3000/product').then(res => {
                //called fourth
                resolve(res.json()); //resolve the promise
            });
        });
        //called third
        return promise;
    };
};

//exports json file
export default HttpService;
