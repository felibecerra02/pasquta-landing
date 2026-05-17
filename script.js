const phoneNumber = "5493513187487";

const products = [
  {
    id: "medialunas",
    category: "Panificados",
    name: "Medialunas",
    detail: "Para cafeterías, desayunos y meriendas."
  },
  {
    id: "croissants",
    category: "Panificados",
    name: "Croissants",
    detail: "Piezas listas para hornear o terminar en cocina."
  },
  {
    id: "facturas",
    category: "Panificados",
    name: "Facturas y piezas dulces",
    detail: "Opciones prácticas para rotación diaria."
  },
  {
    id: "papas",
    category: "Alta rotación",
    name: "Papas prefritas",
    detail: "Producto clave para bares, locales y cocinas con volumen."
  },
  {
    id: "hamburguesas",
    category: "Alta rotación",
    name: "Hamburguesas",
    detail: "Para servicio rápido, combos y cartas simples."
  },
  {
    id: "rebozados",
    category: "Alta rotación",
    name: "Rebozados y bastones",
    detail: "Soluciones congeladas para sumar variedad."
  },
  {
    id: "sin-tacc",
    category: "Especiales",
    name: "Opciones aptas celíacos",
    detail: "Alternativas para ampliar la propuesta del negocio."
  },
  {
    id: "promos",
    category: "Especiales",
    name: "Promociones vigentes",
    detail: "Consultas por ofertas o productos de temporada."
  }
];

let cart = [];
let activeFilter = "Todos";

const productPicker = document.getElementById("productPicker");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const sendToWhatsApp = document.getElementById("sendToWhatsApp");
const clearCartButton = document.getElementById("clearCart");
const businessName = document.getElementById("businessName");
const deliveryZone = document.getElementById("deliveryZone");
const orderNotes = document.getElementById("orderNotes");
const filterButtons = document.querySelectorAll(".filter-button");
const siteHeader = document.querySelector(".site-header");
const orderSummary = document.querySelector(".order-summary");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14,
  rootMargin: "0px 0px -8% 0px"
});

document.querySelectorAll(".reveal, .stagger-list").forEach((element) => {
  revealObserver.observe(element);
});

function updateHeaderState() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

function filteredProducts() {
  if (activeFilter === "Todos") return products;
  return products.filter((product) => product.category === activeFilter);
}

function renderProducts() {
  productPicker.innerHTML = filteredProducts().map((product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    return `
      <article class="product-row">
        <div>
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p>${product.detail}</p>
        </div>
        <button class="add-button ${isInCart ? "in-cart" : ""}" type="button" data-add="${product.id}">
          ${isInCart ? "Sumar otro" : "Agregar"}
        </button>
      </article>
    `;
  }).join("");

  requestAnimationFrame(() => {
    productPicker.querySelectorAll(".product-row").forEach((row, index) => {
      row.style.animation = `floatIn 420ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 45}ms both`;
    });
  });
}

function addToCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  renderProducts();
  renderCart();
}

function updateQuantity(productId, amount) {
  cart = cart
    .map((item) => {
      if (item.id !== productId) return item;
      return { ...item, quantity: item.quantity + amount };
    })
    .filter((item) => item.quantity > 0);

  renderProducts();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderProducts();
  renderCart();
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalQuantity === 1 ? "1 producto" : `${totalQuantity} productos`;
  sendToWhatsApp.disabled = cart.length === 0;
  orderSummary.classList.remove("has-items");

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Todavía no agregaste productos.</p>`;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <span>${item.category}</span>
        <div class="quantity-controls">
          <button class="quantity-button" type="button" data-quantity="${item.id}" data-amount="-1">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-button" type="button" data-quantity="${item.id}" data-amount="1">+</button>
        </div>
      </div>
      <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Quitar ${item.name}">x</button>
    </article>
  `).join("");

  requestAnimationFrame(() => {
    orderSummary.classList.add("has-items");
  });
}

function buildMessage() {
  const lines = [
    "Hola Pasquta, quiero hacer una consulta/pedido.",
    "",
    "Productos seleccionados:"
  ];

  cart.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.name} - Cantidad: ${item.quantity}`);
  });

  lines.push("");
  lines.push(`Negocio: ${businessName.value.trim() || "A completar"}`);
  lines.push(`Zona/dirección: ${deliveryZone.value.trim() || "A completar"}`);

  const notes = orderNotes.value.trim();
  if (notes) {
    lines.push(`Comentarios: ${notes}`);
  }

  lines.push("");
  lines.push("Quedo atento/a a disponibilidad, presentación y coordinación de entrega.");

  return lines.join("\n");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

productPicker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    updateQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.amount));
  }

  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
  }
});

clearCartButton.addEventListener("click", () => {
  cart = [];
  renderProducts();
  renderCart();
});

sendToWhatsApp.addEventListener("click", () => {
  if (cart.length === 0) return;
  const encodedMessage = encodeURIComponent(buildMessage());
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});

renderProducts();
renderCart();
