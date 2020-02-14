import React from 'react';
import Home from './Home';
import {Route} from 'react-router-dom';
import Navbar from './Navbar'
import Catalog from './Catalog'
import ProductDetails from './ProductDetails';
function App(props){
    return(
        <div>
            <Navbar />
            <div className = "cointainer my-4">
            <Route path = "/" exact = {true} component = {Home}/>
            <Route path = "/catalog" exact = {true} component = {Catalog} />
            <Route path = "/catalog/:id" component = {ProductDetails} />
                  
            </div>
        </div>
    );
}

export default App;