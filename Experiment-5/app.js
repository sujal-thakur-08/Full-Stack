document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'T-Shirt', category: 'clothing' },
        { name: 'Jeans', category: 'clothing' },
        { name: 'Headphones', category: 'electronics' },
        { name: 'Smartphone', category: 'electronics' },
        { name: 'Novel', category: 'books' },
        { name: 'Cookbook', category: 'books' }
    ];

    const categoryFilter = document.getElementById('category-filter');
    const productContainer = document.getElementById('product-container');

    const displayProducts = (productsToDisplay) => {
        productContainer.innerHTML = productsToDisplay
            .map(product => `<div class="product-item">${product.name}</div>`)
            .join('');
    };

    displayProducts(products);

    categoryFilter?.addEventListener('change', (e) => {
        const filtered = e.target.value === 'all' 
            ? products : products.filter(p => p.category === e.target.value);
        displayProducts(filtered);
    });
});
