import axios from 'axios';

export default class CatalogService{
    //baseUrl = "https://awesome-store-server.herokuapp.com"

   static baseUrl = 'http://localhost:4201'

    static getProducts(){

        //axios.*() returns a Promise object (Promise is built in class in JS - it was introduced in ES2015)
        // then() and catch() are 2 methods of Promise object
        return axios.get(`${this.baseUrl}/products`)
        .then(function(response){// backend successfully returned data
            return response.data;// data returned by backend (array of products) 

        })
        .catch(function(error){  // backend was not able to return data

            console.log(error.message);
            throw error;// we throw the error so that someone calling getProducts is able to handle it

        });
    }
    static getProduct(id){

        //axios.*() returns a Promise object (Promise is built in class in JS - it was introduced in ES2015)
        // then() and catch() are 2 methods of Promise object
        return axios.get(`${this.baseUrl}/products/${id}`)
        .then(function(response){// backend successfully returned data
            return response.data;// data returned by backend (array of products) 

        })
        .catch(function(error){  // backend was not able to return data

            console.log(error.message);
            throw error;// we throw the error so that someone calling getProducts is able to handle it
        });
    }
}