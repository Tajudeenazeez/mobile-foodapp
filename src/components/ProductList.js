import React from 'react'
import Product from './order/Product'
import "../asset/style/productList.css"
import { FaSearch } from 'react-icons/fa'
const ProductList = ({data}) => {
  return (
    <>
     <div className='productlist'>
        <div className='searchbox'>
            <input
                type="text"
                placeholder="search"
            />
        <FaSearch  className='fasearch'/>
        </div>
        {    
          data.map( (product, key) => {
            return (<Product product = {product} key={key} />)
          })  
        }
     </div>
    </>
  )
}

export default ProductList