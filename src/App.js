import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart'; // ✅ FIXED CASE
import { fetchProducts } from './utils/promises';
import { productGenerator } from './utils/generators';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/Toast';
import './styles/App.css';

const APP_TITLE = "TechBazaar India";
const CATEGORIES = ['All', 'Storage', 'Memory', 'Peripherals', 'Components', 'Books'];

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /* ===============================
     LOAD PRODUCTS
     =============================== */
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        const generator = productGenerator(fetchedProducts);
        const enhancedProducts = [];

        for (const product of generator) {
          enhancedProducts.push(product);
        }

        setProducts(enhancedProducts);
        setFilteredProducts(enhancedProducts);
      } catch {
        const fallbackProducts = [
          {
            id: 1,
            name: 'Samsung 980 Pro 1TB NVMe SSD',
            price: 8999,
            category: 'Storage',
            description: 'PCIe 4.0 NVMe M.2 SSD with read speeds up to 7000MB/s.',
            image: '/images/SSD.jpg',
            rating: 4.5,
            inStock: true
          },
          {
            id: 2,
            name: 'Corsair Vengeance 16GB DDR4 RAM',
            price: 5499,
            category: 'Memory',
            description: '16GB DDR4 3200MHz CL16 Desktop Memory.',
            image: 'https://m.media-amazon.com/images/I/61kRr3gBmXL._AC_SL1500_.jpg',
            rating: 4.3,
            inStock: true
          },
          {
            id: 3,
            name: 'Cosmic Byte Firefly Mechanical Keyboard',
            price: 3299,
            category: 'Peripherals',
            description: 'RGB Mechanical Gaming Keyboard with Blue Switches.',
            image: 'https://m.media-amazon.com/images/I/71Wj-2+-ZLL._AC_SL1500_.jpg',
            rating: 4.2,
            inStock: true
          },
          {
            id: 4,
            name: 'Logitech G102 Gaming Mouse',
            price: 1899,
            category: 'Peripherals',
            description: 'RGB Gaming Mouse with 8000 DPI sensor.',
            image: '/images/mouse.jpg', // ✅ FIXED PATH
            rating: 4.4,
            inStock: true
          },
          {
            id: 5,
            name: 'ZOTAC RTX 3060 Twin Edge',
            price: 32999,
            category: 'Components',
            description: '12GB GDDR6 Graphics Card with Ray Tracing.',
            image: 'https://m.media-amazon.com/images/I/81P3S+-bN3L._AC_SL1500_.jpg',
            rating: 4.6,
            inStock: true
          },
          {
            id: 6,
            name: 'Introduction to Algorithms',
            price: 899,
            category: 'Books',
            description: 'Classic algorithms book by Thomas H. Cormen.',
            image: 'https://m.media-amazon.com/images/I/41VndKV5BXL._SX442_BO1,204,203,200_.jpg',
            rating: 4.7,
            inStock: true
          }
        ];

        setProducts(fallbackProducts);
        setFilteredProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  /* ===============================
     FILTER PRODUCTS
     =============================== */
  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  /* ===============================
     CART LOGIC (FIXED)
     =============================== */
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const updated = prev.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prev => {
      const updated = prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  /* ===============================
     LOAD CART FROM STORAGE
     =============================== */
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {
        localStorage.removeItem('cart');
      }
    }
  }, []);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <ToastProvider>
      <div className="app">
        <Header
          title={APP_TITLE}
          cartCount={totalItems}
          onSearch={setSearchTerm}
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onCartToggle={() => setIsCartOpen(v => !v)}
        />

        <main className="main-content">
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <>
              <ProductList
                products={filteredProducts}
                onAddToCart={addToCart}
              />

              <Cart
                cartItems={cart}
                onRemoveItem={removeFromCart}
                onUpdateQuantity={updateQuantity}
                totalPrice={totalPrice}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </>
          )}
        </main>

        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;
