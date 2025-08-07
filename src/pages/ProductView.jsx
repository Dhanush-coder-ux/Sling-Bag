import ProductSlide from '../components/ProductSlide';
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
    const { productId } = useParams();
    return (
      <div>
        {productId}
        <ProductSlide/>
      </div>
    )
}

export default ProductView
