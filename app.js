const products = [
  {
    name: 'Sony Playstation 5',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSru-M_eY5CoNFLjezhdy-UHT9V_qoFSWNdfw&s',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9wHhMudNFPaclK7wgeFvOZI90SbQHTAm6Q&s',
    category: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBFxi1DUdZYoNdR70kskve2Vl82Oj1v6hmQ&s',
    category: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq0NPOIJXob4WMtAyD8OxtkRTGtCQomQncA&s',
    category: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3dTzEXDEVJRI6YDioqqSSpvaihsD-rNphQ&s',
    category: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuuwhXxJEkPOTmmup0fFXv2g6Y6N-cUfBeA&s',
    category: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JvCa8uVFxRBvIWW6N9fba9WhaZav2kjP4w&s',
    category: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RII_cI0g5XWBEsbwVpT9mDbHCqPxYsjGVQ&s',
    category: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeCRgCQXVOkNkChvQL4HsIdCPFnDrxB1Acg&s',
    category: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQnUmNtdfNQj3i7DwkCJ0zq8cdjOuJIs54w&s',
    category: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKU22gXCir6WkfKFJYnp-x9LAArzXdej8AA&s',
    category: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v4F6GxmeB_WQOnS5KzdfXkxXTpjQDuL6Iw&s',
    category: 'smartphones',
    price: 999.99,
  },
];


// Select from DOM Elements
const productsWrapper = document.getElementById('products_wrapper');
const checkboxs = document.querySelectorAll('.check');
const filterContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

// Initialize cart count
let cartItemCOunt = 0;


// Initialize product elements array
const productElements = [];

// Loop over products and create Html elements
products.forEach((item)=> {
  const productElement = createProductElement(item);
  productsWrapper.appendChild(productElement);
  productElements.push(productElement);

  // Add event listener for add to cart button
  const addToCartButton = productElement.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
      cartItemCOunt++;
      cartCount.textContent = cartItemCOunt;
    });
})

// Create product element
function createProductElement(item) {
  const productElement = document.createElement('div');
  productElement.className = "item space-y-2";
  productElement.innerHTML = `
     <div class="bg-gray-100 flex justify-center items-center relative overflow-hidden group cursor-pointer border rounded-xl">
        <img src="${item.url}" alt="${item.name}" class="!w-[500px] !h-[170px] object-cover" width="500" height="500">
        <button class="add-to-cart bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add To Cart</button>
    </div>
    <p>${item.name}</p>
    <strong>Price: $${item.price.toFixed(2)}</strong>
  `;
  
  productsWrapper.appendChild(productElement);
  
  // Add event listener for add to cart button
  const addToCartButton = productElement.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    cartItemCOunt++;
    cartCount.textContent = cartItemCOunt;
  });

  return productElement;
}