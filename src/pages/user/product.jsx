import React from 'react';
import '../../style/productpage.css';

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with cutting-edge features.",
    price: 29999,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Noise-cancelling with high-quality sound.",
    price: 4999,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Laptop",
    description: "Lightweight, powerful, and reliable.",
    price: 59999,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Track your fitness and stay connected.",
    price: 9999,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Gaming Console",
    description: "Next-gen gaming with immersive experiences.",
    price: 39999,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ₹{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
