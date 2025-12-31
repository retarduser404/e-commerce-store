import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <div className="products-header">
        <h2>Products ({products.length})</h2>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">
          <p>No products found. Try changing your search or category.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
