import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Productlist = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
        .then((res)=>res.json())
        .then((data)=>{setProduct(data)})
    })
    return (
        <div>
            <h1>This is product list page</h1>
            {
                product.length!==0 ?(
                    product.map((p)=>{
                        return (
                            
                            
                            <div className="card" style={{'width':'400px'}} key={p._id.$oid}>
                               
                                <div className="card-body">
                                    <img className="card-img-top" src={p.productimg} alt={p.productname} />
                                    <h4 className="card-title">{p.productname}</h4>
                                    <p className="card-text">{p.productcost}</p>
                                    <Link href="#" className="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        )
                    })
                ):(<h1>Loading........</h1>)
                    
            }
        </div>
    );
};

export default Productlist;