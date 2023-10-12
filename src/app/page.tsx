"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../types/Product';
import ProductList from '@/components/ProductList';
import Loader from '@/components/Loader'
import { ErrorType } from '@/types/Error';

const URL = 'https://fakestoreapi.com/products';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorType>(ErrorType.NONE);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get(URL)
        .then((res) => {
          setProducts(res.data);
          setError(false);
        })
        .catch(() => {
          setError(true);
          setErrorMessage(ErrorType.FETH)
        })
        .finally(() => {
          setLoading(false);
        });
      }, 500);
  }, []);

  return (
    <>
      {error && <div className='font-bold text-center'>{errorMessage}</div>}
      {loading ? <Loader/> : <ProductList products={products}/>}
    </>
  )
}

export default Home