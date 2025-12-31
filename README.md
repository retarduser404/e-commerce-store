# TechBazaar India 🛒

![TechBazaar India](https://img.shields.io/badge/React-18.2.0-blue) ![Parcel](https://img.shields.io/badge/Parcel-2.8.3-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

A modern, responsive e-commerce platform built with React, designed for browsing and purchasing tech products. Experience seamless shopping with advanced features like real-time search, category filtering, and a persistent shopping cart.

## ✨ Features

- **Product Catalog**: Browse a wide range of tech products including storage devices, memory, peripherals, components, and books
- **Advanced Search**: Find products instantly with our powerful search functionality
- **Category Filtering**: Filter products by categories like Storage, Memory, Peripherals, Components, and Books
- **Shopping Cart**: Add, remove, and update item quantities with persistent cart storage
- **Responsive Design**: Optimized for desktop and mobile devices
- **Toast Notifications**: User-friendly notifications for cart actions
- **Fallback Data**: Graceful handling of API failures with fallback product data
- **Local Storage**: Cart persistence across browser sessions

## 🚀 Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Parcel 2.8.3
- **Styling**: CSS Modules
- **State Management**: React Hooks (useState, useEffect)
- **Data Fetching**: Custom async utilities
- **Icons**: Emoji and custom CSS

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/retarduser404/e-commerce-store.git
   cd e-commerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234` (or the port shown in your terminal)

## 📖 Usage

### Browsing Products
- Use the search bar to find specific products
- Filter by categories using the dropdown menu
- Click on product cards to view details

### Managing Cart
- Click "Add to Cart" on any product
- View cart by clicking the cart icon in the header
- Adjust quantities or remove items directly from the cart
- Cart contents persist across browser sessions

### Building for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
ecommerce-store/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.js       # Navigation and search
│   │   ├── ProductList.js  # Product grid display
│   │   ├── ProductCard.js  # Individual product card
│   │   ├── Cart.js         # Shopping cart component
│   │   └── Toast.js        # Notification component
│   ├── context/            # React context providers
│   │   ├── ToastContext.js # Toast notification context
│   │   └── ThemeContext.js # Theme management
│   ├── utils/              # Utility functions
│   │   ├── promises.js     # Data fetching utilities
│   │   └── generators.js   # Product data generators
│   ├── styles/             # CSS stylesheets
│   │   ├── App.css         # Main app styles
│   │   └── Toast.css       # Toast notification styles
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Product images sourced from Amazon
- Icons and emojis for enhanced UI
- React community for excellent documentation

---

**Happy Shopping! 🛍️**
