"use client"

import React from 'react'
import ProductItem from './ProductItem'
import { Product } from '@/types/Product'

const ProductList = ({ products }) => {
  return (
    <div className='grid grid-cols-4 gap-7'>
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList