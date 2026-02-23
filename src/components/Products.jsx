// src/components/Products.jsx
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emptyCartImg from "../assets/empty-cart.png";
import heroImg from "../assets/rebirth-of-idah-pic.png";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://greenquest-mga3.onrender.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart handlers
  const addToCart = (product) => {
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shop-wrapper">
      {/* HERO */}
      <div className="shop-hero">
        <img src={heroImg} alt="Shop Hero" className="shop-hero-img" />
      </div>

      <h1 className="shop-title">Shop Our Products</h1>

      {loading ? (
        <p className="shop-loading">Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={`https://greenquest-mga3.onrender.com/images/${product.image}`}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₦{product.price.toLocaleString()}</p>
              <p className="product-desc">{product.description}</p>
              <button className="buy-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CART DRAWER */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}></div>
      )}
      <div className={`cart-drawer ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <FaTimes className="close-icon" onClick={() => setShowCart(false)} />
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <img src={emptyCartImg} alt="Empty Cart" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #222",
                  paddingBottom: "0.5rem",
                  textAlign: "left",
                  marginTop: "20px",
                }}
              >
                <h4>{item.name}</h4>
                <p>₦{item.price.toLocaleString()}</p>

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <FaMinus style={{ cursor: "pointer" }} onClick={() => decreaseQty(item._id)} />
                  <span>{item.quantity}</span>
                  <FaPlus style={{ cursor: "pointer" }} onClick={() => increaseQty(item._id)} />
                </div>
              </div>
            ))}

            <h3>Total: ₦{total.toLocaleString()}</h3>

            <button className="buy-btn2" onClick={clearCart}>
              Clear Cart
            </button>

            <button
              className="buy-btn"
              style={{ marginTop: "10px" }}
              onClick={() => navigate("/checkout", { state: { cart, total } })}
            >
              Checkout
            </button>
          </>
        )}
      </div>

      {/* CART BUBBLE */}
      <div className="cart-bubble" onClick={() => setShowCart((prev) => !prev)}>
        <FaShoppingCart size={24} color="black" />
        {cart.length > 0 && (
          <span className="cart-count">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        )}
      </div>
    </div>
  );
};

export default Products;