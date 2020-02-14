//cc
import React,{Component} from 'react';
import CatalogService from '../services/Catalog';
import Alert from './Alert';

const DETAILS_FETCHING = 'DETAILS_FETCHING';
const DETAILS_FETCHED = 'DETAILS_FETCHED';
const DETAILS_FETCH_FAILED = 'DETAILS_FETCH_FAILED';


class ProductDetails extends Component {
    state = {  
        product:null,
        error:null
    };
    render() { 
        const{status,error,product} = this.state;

        let el = null;

        switch(status){
            case DETAILS_FETCHING:
                el = 
                    <Alert type = "info">
                        <strong>Hang on! Products are being fetched.</strong>
                    </Alert>
                    
                break;
            case DETAILS_FETCHED:
                
                
                el = (
                    <div className = "row">

                        <div className = 'col-4'>
                            <img src = {product.imageUrl} />
                        </div>

                    <div className = "col-8">
                        <h2>{product.name}</h2>
                        <hr/>
                        <p>{product.description}</p>
                        <p>Code : {product.code}</p>
                        <p>Released on : {product.releaseDate}</p>
                        <p>Price : {product.price}</p>
                        <p>Rating : {product.rating}</p>
                    </div>
                            
                        
                    </div>
                );
                break;
            case DETAILS_FETCH_FAILED:
                el =  <Alert type = "danger">
                    <strong>Sorry we are unable to fetch products.
                        <br/>
                        {error.message}
                    </strong>
                </Alert> 
                break;
            
            default:
                el = null;
                break;
        }
        return (  
            <div>
                {el}
            </div>
        );
    }

componentDidMount() {

    this.setState({
        status: DETAILS_FETCHING
    });

    CatalogService.getProduct(1)
    .then((product)=>{
        
        this.setState({

            product: product,
            status: DETAILS_FETCHED
        })
    })
    .catch((error) =>{
        this.setState({
            error: error,
            product:null,
            status: DETAILS_FETCH_FAILED
        })
    })
}
}
export default ProductDetails;