import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductBox = (props) => {
    return (
        <div className="product-box">
            <ProductItem itemName={props.item1} src={props.src1}/>
            <ProductItem itemName={props.item2} src={props.src2}/>
            <ProductItem itemName={props.item3} src={props.src3}/>
        </div>
    )
}
