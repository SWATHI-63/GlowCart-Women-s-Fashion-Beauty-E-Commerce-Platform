import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    category: 'Fashion',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Radiant Glow Serum',
    category: 'Beauty',
    price: 32.50,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Classic Vintage Denim',
    category: 'Fashion',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Matte Liquid Lipstick',
    category: 'Beauty',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Elegant Evening Gown',
    category: 'Fashion',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1566160980486-1eb8a61962d3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Hydrating Face Cream',
    category: 'Beauty',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80'
  }
];

const ProductList = () => {
  return (
    <section className="product-list-container" id="shop">
      <h2 className="section-title">Trending Now</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
