import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import PersonList from '../components/ProductList';
import axios from 'axios';
export default () => {
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product')
        .then(res=>setProduct(res.data))
        .catch(err=> console.log("Error: ", err))
    }, [])
    return (
        <div>
            <>
            <ProductForm />
            <hr/>
            <PersonList product={product}/>
            </>
        </div>
    )
}