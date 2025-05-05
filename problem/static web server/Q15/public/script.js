fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-container');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error loading products:', err);
  });
