const products = [
    { name: "Wireless Headphones", price: "₹7,999", desc: "Noise-cancelling headphones", image: "https://via.placeholder.com/50" },
    { name: "Smartwatch", price: "₹12,999", desc: "Tracks fitness and health", image: "https://via.placeholder.com/50" },
    { name: "Gaming Mouse", price: "₹2,499", desc: "Ergonomic gaming mouse", image: "https://via.placeholder.com/50" },
    { name: "Laptop Stand", price: "₹1,999", desc: "Adjustable laptop stand", image: "https://via.placeholder.com/50" },
    { name: "Mechanical Keyboard", price: "₹4,999", desc: "RGB mechanical keyboard", image: "https://via.placeholder.com/50" },
    { name: "Monitor", price: "₹10,999", desc: "24-inch full HD", image: "https://via.placeholder.com/50" },
    { name: "Bluetooth Speaker", price: "₹2,299", desc: "Portable speaker", image: "https://via.placeholder.com/50" },
    { name: "Webcam", price: "₹1,499", desc: "HD webcam for video calls", image: "https://via.placeholder.com/50" },
    { name: "Ergo Chair", price: "₹8,799", desc: "Comfortable chair", image: "https://via.placeholder.com/50" },
    { name: "Graphics Tablet", price: "₹5,499", desc: "Tablet for drawing", image: "https://via.placeholder.com/50" },
    { name: "Wi-Fi Router", price: "₹2,099", desc: "High-speed router", image: "https://via.placeholder.com/50" }
  ];
  
  let currentPage = 1;
  const itemsPerPage = 5;
  
  function showProducts() {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = products.slice(start, end);
  
    for (let product of pageItems) {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td><img src="${product.image}" alt="Product Image"></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.desc}</td>
      `;
  
      tableBody.appendChild(row);
    }
  
    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;
  }
  
  function goToPrevious() {
    if (currentPage > 1) {
      currentPage--;
      showProducts();
    }
  }
  
  function goToNext() {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      currentPage++;
      showProducts();
    }
  }
  
  window.onload = showProducts;
  