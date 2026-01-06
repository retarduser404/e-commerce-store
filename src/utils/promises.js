const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockProducts = [
                {
                    id: 1,
                    name: 'Samsung 980 Pro 1TB NVMe SSD',
                    price: 8999,
                    category: 'Storage',
                    description: 'PCIe 4.0 NVMe M.2 SSD with read speeds up to 7000MB/s. Perfect for gaming and professional workloads.',
                    image: 'SSD.jpg',
                    rating: 4.5,
                    inStock: true
                },
                {
                    id: 2,
                    name: 'Corsair Vengeance 16GB DDR4 RAM',
                    price: 5499,
                    category: 'Memory',
                    description: '16GB DDR4 3200MHz CL16 Desktop Memory. High performance RAM for gaming and content creation.',
                    image: 'RAM.jpg',
                    rating: 4.3,
                    inStock: true
                },
                {
                    id: 3,
                    name: 'Cosmic Byte CB-GK-18 Firefly Keyboard',
                    price: 3299,
                    category: 'Peripherals',
                    description: 'RGB Mechanical Gaming Keyboard with Blue Switches. Full RGB backlighting with multiple effects.',
                    image: 'keyboard.jpg',
                    rating: 4.2,
                    inStock: true
                },
                {
                    id: 4,
                    name: 'Logitech G102 Lightsync Gaming Mouse',
                    price: 1899,
                    category: 'Peripherals',
                    description: 'RGB Gaming Mouse with 8000 DPI sensor. 6 programmable buttons for gaming.',
                    image: 'mouse.jpg',
                    rating: 4.4,
                    inStock: true
                },
                {
                    id: 5,
                    name: 'ZOTAC Gaming GeForce RTX 3060 Twin Edge',
                    price: 32999,
                    category: 'Components',
                    description: '12GB GDDR6 Graphics Card with Ray Tracing. Supports DLSS for better gaming performance.',
                    image: 'Graphics.jpg',
                    rating: 4.6,
                    inStock: true
                },
                {
                    id: 6,
                    name: 'Introduction to Algorithms (Eastern Economy Edition)',
                    price: 899,
                    category: 'Books',
                    description: 'The Eastern Economy Edition of the classic algorithms book by Thomas H. Cormen. Comprehensive coverage of algorithms and data structures.',
                    image: 'book.jpg',
                    rating: 4.7,
                    inStock: true
                }
            ];
            resolve(mockProducts);
        }, 1000);
    });
};

export { fetchProducts };