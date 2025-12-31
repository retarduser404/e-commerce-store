function* productGenerator(products) {
    for (let product of products) {
        yield {
            ...product,
            discountedPrice: Math.round(product.price * 0.9 * 100) / 100,
            isDiscounted: true
        };
    }
}

export { productGenerator };