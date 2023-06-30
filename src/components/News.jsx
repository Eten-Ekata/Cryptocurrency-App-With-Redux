import React from 'react'
import Loader from './Loader';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 6 : 12 });
  console.log(cryptoNews)
  if (!cryptoNews?.value) return <Loader />;
  return (
    <div>News</div>
  )
}

export default News