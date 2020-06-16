import React, { useRef } from 'react';

const Addproduct = () => {
    const productname = useRef();
    const productcost = useRef();
    const submitform = (e)=>{
        e.preventDefault();
        //console.log(productname.current.value,productcost.current.value)
        const newproduct = {
            productname : productname.current.value,
            productcost : productcost.current.value
        }
        console.log(newproduct)
        fetch('https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newproduct)
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
    }
    return (
        <div>
            
            <form onSubmit={submitform}>
                <div className="form-group">
                    <label >Product Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Name" ref={productname}/>
                </div>
                <div className="form-group">
                    <label >Product Cost:</label>
                    <input type="text" className="form-control" placeholder="Enter Product cost" ref={productcost}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Addproduct;