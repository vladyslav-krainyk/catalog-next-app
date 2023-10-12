"use client"

import { Product } from '@/types/Product';
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const item = useSelector((state: {cart: []}) => state.cart);

  return (
    <div
      className='flex items-center justify-between mb-5'
    >
      <Link href={'/'} className='font-bold'>Shop</Link>
      <div>
        <Link
          className='text-black no-underline font-bold'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='ml-[20px] text-black no-underline font-bold mr-5'
          href={'/cart'}
        >
          Cart
        </Link>
        <span className='font-bold'>items: {item.length}</span>
      </div>
    </div>
  )
}

export default Navbar