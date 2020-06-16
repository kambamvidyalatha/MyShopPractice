import React from 'react';
import { Link, Route } from 'react-router-dom';
import Productlist from './Productlist';

const Productpage = () => {
    return (
        <div>
            <h1>Product page </h1>
            <Link to="/AddProduct">AddProduct</Link>
            <Link to="./products/ViewProducts">ViewProducts</Link>
            
                <Route path="./products/ViewProducts">
                    <Productlist></Productlist>
                </Route>
        
        </div>
        
        
    );
};

export default Productpage;