import React from 'react';

export default props => {
    return(
        <div>
            <h1>All Products</h1>
            {props.product.map((products, index) => {
                return <a href={`/${products._id}`} key={index}>{products.title}{<br></br>}</a>
            })}
        </div>
    )
}