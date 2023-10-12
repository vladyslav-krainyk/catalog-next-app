"use client";
import React from 'react'
import { remove } from '@/Redux/CartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Product } from '@/types/Product';
import Image from 'next/image';

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: {cart: []}) => {
    console.log(state)
    return state.cart;
  })

  const handleRemove = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <div>
        <h3 className='mb-[20px] font-bold'>Cart page</h3>
        <div className='grid grid-cols-4 gap-7'>
            {
              cartItems.map((item: Product)=>(
                <div
                  key={item.id}
                  className='flex items-center flex-col justify-between text-center bg-white p-5 rounded-xl'
                >
                  <Image src={item.image} alt='img' className='h-[80px] mb-[20px]'/>
                  <h4 className='mb-[20px]' >{item.title}</h4>
                  <h5 className='mb-[20px]'>{item.price} $</h5>
                  <button
                    className='outline-none bg-purple-800 hover:bg-purple-600 duration-300 ease-in-out text-white px-2 py-1 rounded-xl'
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Cartpage