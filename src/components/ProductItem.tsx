"use client"

import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/CartSlice';
import { Product } from '@/types/Product';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product: Product) => {
    dispatch(add(product));
  }

  return (
    <div
      className='flex items-center flex-col justify-between text-center bg-white p-5 rounded-xl'
    >
      <Image
        src={`${product.image}`}
        className='h-[80px] mb-[20px]'
        alt={`${product.title}`}
      />
      <h4 className='mb-[20px]'>
        {product.title}
      </h4>
      <h5 className='mb-[20px]'>
        {product.price} $
      </h5>
      <button
        className='outline-none bg-purple-800 hover:bg-purple-600 duration-300 ease-in-out text-white px-2 py-1 rounded-xl'
        onClick={() => handleAdd(product)}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductItem