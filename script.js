// Restore scroll position after reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.addEventListener("scroll", () => {
  sessionStorage.setItem("pasquta_scrollY", window.scrollY);
}, { passive: true });
window.addEventListener("load", () => {
  const saved = sessionStorage.getItem("pasquta_scrollY");
  if (saved) {
    requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
  }
});

const phoneNumber = "5493513187487";

const products = [
  // LA VILLA
  { id: "medialuna-dulce-villa", brand: "La Villa", name: "Medialuna Dulce Manteca", presentation: "108 unidades", variants: [] },
  { id: "medialuna-salada-villa", brand: "La Villa", name: "Medialuna Salada Manteca", presentation: "108 unidades", variants: [] },
  { id: "criollo-especial-villa", brand: "La Villa", name: "Criollo Especial Manteca", presentation: "160 unidades", variants: [] },
  { id: "factura-crema-villa", brand: "La Villa", name: "Factura Surtida con Crema", presentation: "120 unidades", variants: [] },
  { id: "sacramento-ddl-villa", brand: "La Villa", name: "Sacramento con DDL", presentation: "120 unidades", variants: [] },
  { id: "baguettin-blanca-villa", brand: "La Villa", name: "Baguettin Blanca", presentation: "Bolsa x 24 unidades", variants: [] },
  { id: "ciabatta-villa", brand: "La Villa", name: "Ciabatta", presentation: "16 unidades", variants: [] },
  { id: "pan-lomo-villa", brand: "La Villa", name: "Pan de Lomo", presentation: "20 unidades", variants: [] },
  { id: "pan-hamburguesa-villa", brand: "La Villa", name: "Pan de Hamburguesa", presentation: "30 unidades", variants: [] },
  { id: "caseratito-villa", brand: "La Villa", name: "Caseratito", presentation: "20 unidades", variants: [] },

  // PASTELINO
  { id: "medialuna-pastelino", brand: "Pastelino", name: "Medialuna Dulce/Salada", presentation: "140 unidades - 40 gr", variants: [] },
  { id: "rejilla-pastelino", brand: "Pastelino", name: "Rejilla con Membrillo/Crema", presentation: "84 unidades - 50 gr", variants: [] },
  { id: "criollo-cuadrado-pastelino", brand: "Pastelino", name: "Criollo Cuadrado", presentation: "140 unidades - 50 gr", variants: [] },
  { id: "croissant-gigante-pastelino", brand: "Pastelino", name: "Croissant Gigante", presentation: "40 unidades - 100 gr", variants: [] },
  { id: "criollo-redondo-pastelino", brand: "Pastelino", name: "Criollo Redondo", presentation: "150 unidades - 50 gr", variants: [] },
  { id: "croissant-frances-pastelino", brand: "Pastelino", name: "Croissant Francés", presentation: "112 unidades - 55 gr", variants: [] },
  { id: "media-baguette-precocida-pastelino", brand: "Pastelino", name: "Media Baguette Precocida", presentation: "20 unidades - 150 gr", variants: [] },
  { id: "bollito-manteca-pastelino", brand: "Pastelino", name: "Bollito de Manteca", presentation: "100 unidades - 35 gr", variants: [] },
  { id: "media-baguette-salvado-pastelino", brand: "Pastelino", name: "Media Baguette Salvado", presentation: "20 unidades - 150 gr", variants: [] },
  { id: "pan-masa-madre-pastelino", brand: "Pastelino", name: "Pan de Masa Madre", presentation: "12 unidades - 350 gr", variants: [] },
  { id: "pan-campo-pastelino", brand: "Pastelino", name: "Pan de Campo", presentation: "12 unidades - 350 gr", variants: [] },
  { id: "pan-rustico-multicereal-pastelino", brand: "Pastelino", name: "Pan Rústico Multicereal", presentation: "12 unidades - 350 gr", variants: [] },

  // CRESFOOD (SIN TACC)
  { id: "medialuna-cresfood", brand: "Cresfood", name: "Medialuna Sin TACC", presentation: "Según variante", variants: ["Apta microondas x2 unidades", "Cruda congelada x12 unidades"] },
  { id: "postres-cresfood", brand: "Cresfood", name: "Postres Sin TACC", presentation: "Por unidad", variants: ["Chocotorta", "Cheescake", "Tiramisú", "Marquise"] },
  { id: "criollo-cresfood", brand: "Cresfood", name: "Criollo Sin TACC", presentation: "Según variante", variants: ["Microondas x3", "Congelado x12", "Congelado x30"] },
  { id: "pan-baguette-cresfood", brand: "Cresfood", name: "Pan Baguette Sin TACC", presentation: "Según variante", variants: ["Precocido x2", "Jamón y queso"] },
  { id: "criollo-azucarado-cresfood", brand: "Cresfood", name: "Criollo Azucarado Sin TACC", presentation: "12 unidades", variants: [] },
  { id: "pastas-cresfood", brand: "Cresfood", name: "Pastas Sin TACC", presentation: "Por unidad", variants: ["Canelones", "Lasagna"] },
  { id: "palmeritas-cresfood", brand: "Cresfood", name: "Palmeritas Sin TACC", presentation: "12 unidades", variants: [] },
  { id: "chipa-cresfood", brand: "Cresfood", name: "Chipa Sin TACC", presentation: "Según variante", variants: ["40 unidades (1 kg)", "10 unidades (1/4 kg)"] },
  { id: "tartas-cresfood", brand: "Cresfood", name: "Tartas Sin TACC", presentation: "Por unidad", variants: ["Jamón y queso", "Choclo y crema", "Calabaza", "Espinaca y morrones"] },
  { id: "pan-hamburguesa-cresfood", brand: "Cresfood", name: "Pan de Hamburguesa Sin TACC", presentation: "Por unidad", variants: [] },
  { id: "pizzetas-cresfood", brand: "Cresfood", name: "Pizzetas Sin TACC", presentation: "Según variante", variants: ["Muzza", "Muzza y jamón", "4 quesos", "Napolitana"] },

  // FRAGOLATO
  { id: "palitos-cremita-fragolato", brand: "Fragolato", name: "Palitos Cremita", presentation: "30 unidades", variants: ["Americana", "Frutilla"] },
  { id: "palitos-agua-fragolato", brand: "Fragolato", name: "Palitos Agua/Mix", presentation: "30 unidades", variants: ["Naranja", "Limón", "Ananá", "Frutilla", "Uva", "Tutti", "Mix naranja/frutilla", "Mix ananá/frutilla"] },
  { id: "palito-bombon-fragolato", brand: "Fragolato", name: "Palito Bombón", presentation: "30 unidades", variants: ["Americana", "Dulce de leche", "Frutilla"] },
  { id: "paleta-king-fragolato", brand: "Fragolato", name: "Paleta King", presentation: "12 unidades", variants: ["Americana"] },
  { id: "fragolita-fragolato", brand: "Fragolato", name: "Fragolita", presentation: "Según variante", variants: ["100 cc - 24 unidades", "200 cc - 18 unidades", "500 cc - 12 unidades"] },
  { id: "potes-fragolato", brand: "Fragolato", name: "Potes Helados", presentation: "Según variante", variants: ["1 litro", "3 litros", "5 litros"] },
  { id: "bombones-fragolato", brand: "Fragolato", name: "Bombones Helados", presentation: "Según variante", variants: ["Escocés 15 un.", "Suizo 15 un.", "Almendrado 15 un.", "Casata 15 un.", "Lingotto 24 un."] },
  { id: "tortas-fragolato", brand: "Fragolato", name: "Tortas Heladas", presentation: "Por unidad", variants: ["Kinder", "Oreo", "Frutilla/americana", "Bombón"] },
  { id: "lata-fragolato", brand: "Fragolato", name: "Lata Helado", presentation: "10 KG", variants: [] },

  // MAMANÚ
  { id: "pizzas-8p-mamanu", brand: "Mamanú", name: "Pizza 8 Porciones", presentation: "Por unidad", variants: ["Muzzarella", "Muzza y jamón", "Provolone", "Calabresa", "4 quesos", "Roquefort"] },
  { id: "pizzetas-4p-mamanu", brand: "Mamanú", name: "Pizzeta 4 Porciones", presentation: "Por unidad", variants: ["Muzzarella", "Muzza y jamón", "Provolone", "Calabresa", "4 quesos", "Roquefort"] },
  { id: "canastitas-mamanu", brand: "Mamanú", name: "Canastitas", presentation: "6 unidades", variants: ["Caprese", "Humita", "Calabresa"] },
  { id: "tartas-mamanu", brand: "Mamanú", name: "Tartas", presentation: "Por unidad", variants: ["Jamón y queso", "Pollo", "Calabaza", "Espinaca y ricota"] },
  { id: "empanadas-mamanu", brand: "Mamanú", name: "Empanadas", presentation: "6 unidades o 72 unidades", variants: ["Criolla Carne - 6 unidades", "Criolla Carne - 72 unidades", "Árabe Carne - 6 unidades", "Árabe Carne - 72 unidades", "Pollo - 6 unidades", "Pollo - 72 unidades", "Jamón y queso - 6 unidades", "Jamón y queso - 72 unidades", "Espinaca y queso - 6 unidades", "Espinaca y queso - 72 unidades"] },

  // GICOR
  { id: "milanesa-estandar-gicor", brand: "Gicor", name: "Milanesa Estándar", presentation: "20 unidades", variants: ["Carne 200 gr", "Pollo 200 gr"] },
  { id: "hamburguesa-gicor-molde", brand: "Gicor", name: "Hamburguesa Gicor (Molde)", presentation: "60 unidades - 120 gr", variants: [] },
  { id: "hamburguesa-artesanal-gicor", brand: "Gicor", name: "Hamburguesa Artesanal", presentation: "60 unidades - 120 gr", variants: [] },
  { id: "bife-lomito-ovalado-gicor", brand: "Gicor", name: "Bife para Lomito Ovalado", presentation: "50 unidades", variants: ["Carne 130 gr / 150 gr", "Pollo 130 gr"] },

  // LAS CAMELIAS
  { id: "pata-muslo-camelias", brand: "Las Camelias", name: "Pata Muslo IQF", presentation: "15 KG", variants: [] },
  { id: "pechuga-camelias", brand: "Las Camelias", name: "Pechuga de Pollo IQF", presentation: "15 KG", variants: [] },

  // MCCAIN / FINCA BALCARCE
  { id: "papa-smile-mccain", brand: "McCain / Finca Balcarce", name: "Papa Smile", presentation: "Según variante", variants: ["9 KG", "1.5 KG"] },
  { id: "papa-noisette-mccain", brand: "McCain / Finca Balcarce", name: "Papa Noisette", presentation: "Según variante", variants: ["10 KG", "2.5 KG"] },
  { id: "papa-tradicional-mccain", brand: "McCain / Finca Balcarce", name: "Papa Tradicional (McCain / One Fry)", presentation: "Según variante", variants: ["15 KG", "2.5 KG"] },
  { id: "aros-cebolla-mccain", brand: "McCain / Finca Balcarce", name: "Aros de Cebolla", presentation: "Bolsa x 10 KG", variants: [] },
  { id: "papa-parrillera-mccain", brand: "McCain / Finca Balcarce", name: "Papa Parrillera", presentation: "Bolsa x 15 KG", variants: [] },
  { id: "papa-baston-balcarce", brand: "McCain / Finca Balcarce", name: "Papa Bastón - Finca Balcarce", presentation: "Según variante", variants: ["10 KG", "2.5 KG"] },
  { id: "papa-crinkle-balcarce", brand: "McCain / Finca Balcarce", name: "Papa Crinkle - Finca Balcarce", presentation: "Según variante", variants: ["10 KG", "2.5 KG"] },

  // GRANGY'S
  { id: "baston-merluza-grangys", brand: "Grangy's", name: "Bastón de Merluza", presentation: "5 KG", variants: [] },
  { id: "bocaditos-grangys", brand: "Grangy's", name: "Bocaditos Rebozados", presentation: "5 KG", variants: ["Caprese", "Calabaza y queso", "Espinaca y queso", "Mozzarella y jamón", "Mozzarella"] },
  { id: "cañoncito-mozzarella-grangys", brand: "Grangy's", name: "Cañoncito de Mozzarella", presentation: "6 KG", variants: [] },
  { id: "filet-hierbas-grangys", brand: "Grangy's", name: "Filet de Merluza Finas Hierbas", presentation: "5 KG", variants: [] },
  { id: "filet-romana-grangys", brand: "Grangy's", name: "Filet de Merluza a la Romana", presentation: "5 KG", variants: [] },
  { id: "filet-rebozado-grangys", brand: "Grangy's", name: "Filet de Merluza Rebozado", presentation: "5 KG", variants: [] },
  { id: "formitas-marinas-grangys", brand: "Grangy's", name: "Formitas Marinas", presentation: "5 KG", variants: [] },
  { id: "medallones-grangys", brand: "Grangy's", name: "Medallones Rebozados", presentation: "5 KG", variants: ["Merluza con espinaca", "Merluza caprese", "Merluza jamón y queso", "Pollo espinaca y queso", "Pollo jamón y queso", "Pollo tradicional"] },
  { id: "nuggets-pollo-grangys", brand: "Grangy's", name: "Nugget de Pollo Crocante", presentation: "6 KG", variants: [] },
  { id: "milanesa-soja-grangys", brand: "Grangy's", name: "Milanesa de Soja", presentation: "5 KG", variants: ["Soja tradicional", "Soja con calabaza", "Soja con espinaca"] },
  { id: "patitas-pollo-grangys", brand: "Grangy's", name: "Patitas Rebozadas", presentation: "5 KG", variants: ["Espinaca y queso", "Jamón y queso", "Pollo"] },
  { id: "dinos-pollo-grangys", brand: "Grangy's", name: "Dinos de Pollo", presentation: "5 KG", variants: [] },

  // SOLIMENO
  { id: "formitas-marinas-solimeno", brand: "Solimeno", name: "Formitas Marinas", presentation: "6 KG", variants: [] },
  { id: "rabas-rebozadas-solimeno", brand: "Solimeno", name: "Rabas Rebozadas", presentation: "6 KG", variants: [] },
  { id: "filet-hierbas-solimeno", brand: "Solimeno", name: "Filet de Merluza Finas Hierbas", presentation: "6 KG", variants: [] },
  { id: "medallon-pollo-solimeno", brand: "Solimeno", name: "Medallón de Pollo", presentation: "6 KG", variants: ["Espinaca y queso", "Jamón y queso", "Primavera"] },
  { id: "filet-romana-solimeno", brand: "Solimeno", name: "Filet de Merluza a la Romana", presentation: "6 KG", variants: [] },
  { id: "patitas-pollo-solimeno", brand: "Solimeno", name: "Patitas de Pollo", presentation: "6 KG", variants: ["Cheddar", "Espinaca y queso"] },
  { id: "crocante-merluza-solimeno", brand: "Solimeno", name: "Crocante de Merluza", presentation: "6 KG", variants: [] },
  { id: "medallon-merluza-solimeno", brand: "Solimeno", name: "Medallón de Merluza", presentation: "6 KG", variants: ["Espinaca y queso", "Roquefort", "Tomate y queso", "Jamón y queso", "Primavera", "Provenzal", "Tradicional"] },
  { id: "milanesa-soja-solimeno", brand: "Solimeno", name: "Milanesa de Soja", presentation: "6 KG", variants: ["Tradicional", "Con calabaza"] },

  // Quillén
  { id: "arandano-quillen", brand: "Quillén", name: "Arándano", presentation: "1 kg", variants: ["Caja x12", "Bolsa"] },
  { id: "frambuesa-entera-quillen", brand: "Quillén", name: "Frambuesa Entera", presentation: "Bolsa 1 kg", variants: [] },
  { id: "frambuesa-partida-quillen", brand: "Quillén", name: "Frambuesa Partida", presentation: "1 kg", variants: ["Caja x12", "Bolsa"] },
  { id: "frutilla-quillen", brand: "Quillén", name: "Frutilla", presentation: "1 kg", variants: ["Caja x12", "Bolsa"] },
  { id: "mango-fetas-quillen", brand: "Quillén", name: "Mango en Fetas", presentation: "1 kg", variants: ["Caja x12", "Bolsa"] },
  { id: "maracuya-quillen", brand: "Quillén", name: "Maracuyá", presentation: "1 kg", variants: ["Caja x16", "Bolsa"] },
  { id: "mix-arandano-frutilla-mora-quillen", brand: "Quillén", name: "Mix Arándano, Frutilla y Mora", presentation: "1 kg", variants: ["Caja x12", "Bolsa"] },
  { id: "pure-palta-quillen", brand: "Quillén", name: "Puré de Palta", presentation: "500 grs · Sujeto a disponibilidad de stock del proveedor", variants: ["Caja x8", "Bolsa"] },
  { id: "palta-mitades-quillen", brand: "Quillén", name: "Palta en Mitades", presentation: "500 grs · Sujeto a disponibilidad de stock del proveedor", variants: ["Caja x20", "Bolsa"] },

  // Conosud
  { id: "acelga-conosud", brand: "Conosud", name: "Acelga", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "calabaza-cubos-conosud", brand: "Conosud", name: "Calabaza en Cubos", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "cebolla-cubos-conosud", brand: "Conosud", name: "Cebolla en Cubos", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "champignon-fetas-conosud", brand: "Conosud", name: "Champignón en Fetas", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "choclo-grano-conosud", brand: "Conosud", name: "Choclo en Grano", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "espinaca-conosud", brand: "Conosud", name: "Espinaca", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "zanahoria-conosud", brand: "Conosud", name: "Zanahoria", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] },
  { id: "pimiento-rojo-cubos-conosud", brand: "Conosud", name: "Pimiento Rojo en Cubos", presentation: "1 kg", variants: ["Caja x5", "Bolsa"] }
];

let cart = [];
let activeFilter = "La Villa";

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
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");

if (menuToggle && siteHeader) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    siteHeader.classList.toggle("menu-open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
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
  return products.filter((product) => product.brand === activeFilter);
}

function renderProducts() {
  productPicker.innerHTML = filteredProducts().map((product) => {
    const hasVariants = product.variants && product.variants.length > 0;
    const selectedVariant = hasVariants ? product.variants[0] : "";
    const cartItemId = product.id + (selectedVariant ? "_" + selectedVariant : "");
    const isInCart = cart.some((item) => item.id === cartItemId);
    
    const isSinTacc = product.brand === "Cresfood";
    const badgeHtml = isSinTacc ? `<img src="assets/marcas/sintacclogo.webp" alt="Sin TACC" class="card-badge-sintacc" loading="lazy">` : "";

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card-body">
          <div class="product-name-wrapper">
            <h3>${product.name}</h3>
            ${badgeHtml}
          </div>
          <div class="product-meta">
            <div class="product-meta-item">
              <span class="meta-label">Presentación</span>
              <span class="meta-value">${product.presentation}</span>
            </div>
            ${hasVariants ? `
            <div class="product-meta-item">
              <span class="meta-label">Seleccionar variante</span>
              <select class="variant-select" data-product-id="${product.id}">
                ${product.variants.map((v) => `<option value="${v}">${v}</option>`).join("")}
              </select>
            </div>
            ` : ""}
          </div>
        </div>
        <div class="product-card-footer">
          <button class="add-button ${isInCart ? "in-cart" : ""}" type="button" data-add="${product.id}">
            ${isInCart ? "Sumar otro" : "Agregar"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  requestAnimationFrame(() => {
    productPicker.querySelectorAll(".product-card").forEach((card, index) => {
      card.style.animation = `floatIn 420ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 45}ms both`;
    });
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  let selectedVariant = "";
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    const select = card.querySelector(".variant-select");
    if (select) {
      selectedVariant = select.value;
    }
  }

  const cartItemId = productId + (selectedVariant ? "_" + selectedVariant : "");
  const existingItem = cart.find((item) => item.id === cartItemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: cartItemId,
      productId: productId,
      brand: product.brand,
      name: product.name,
      presentation: product.presentation,
      selectedVariant: selectedVariant,
      quantity: 1
    });
  }

  // Update button on UI dynamically
  if (card) {
    const addButton = card.querySelector("[data-add]");
    if (addButton) {
      addButton.classList.add("in-cart");
      addButton.textContent = "Sumar otro";
    }
  }

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

  cartItems.innerHTML = cart.map((item) => {
    const variantLabel = item.selectedVariant ? ` - ${item.selectedVariant}` : "";
    return `
      <article class="cart-item">
        <div>
          <strong>${item.name}</strong>
          <span>${item.brand}${variantLabel}</span>
          <div class="quantity-controls">
            <button class="quantity-button" type="button" data-quantity="${item.id}" data-amount="-1">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-button" type="button" data-quantity="${item.id}" data-amount="1">+</button>
          </div>
        </div>
        <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Quitar ${item.name}">x</button>
      </article>
    `;
  }).join("");

  requestAnimationFrame(() => {
    orderSummary.classList.add("has-items");
  });
}

function buildMessage() {
  const LF = "\n";
  const productsByBrand = cart.reduce((groups, item) => {
    if (!groups.has(item.brand)) {
      groups.set(item.brand, []);
    }

    groups.get(item.brand).push(item);
    return groups;
  }, new Map());

  const brandBlocks = Array.from(productsByBrand, ([brand, items]) => {
    const productBlocks = items.map((item) => {
      const block = [item.name];

      if (item.selectedVariant) {
        block.push(`Variante: ${item.selectedVariant}`);
      }

      block.push(`Cantidad: ${item.quantity}`);
      return block.join(LF);
    }).join(LF + LF);

    return [`Marca: *${brand}*`, "", productBlocks].join(LF);
  }).join(LF + LF);

  const parts = [
    "Hola Pasquta, quiero realizar el siguiente pedido:",
    "",
    "PEDIDO",
    "",
    brandBlocks,
    "",
    "DATOS DEL NEGOCIO",
    "",
    `Negocio: ${businessName.value.trim() || "A completar"}`,
    "",
    `Dirección/Zona: ${deliveryZone.value.trim() || "A completar"}`,
    "",
    `Comentarios: ${orderNotes.value.trim() || "A completar"}`,
    "",
    "Quedo atento/a a disponibilidad, presentación y coordinación de entrega."
  ];

  return parts.join(LF);
}

function encodeWhatsAppMessage(message) {
  return message
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => encodeURIComponent(line))
    .join("%0D%0A");
}

function buildWhatsAppUrl(message = "") {
  const encodedMessage = message ? encodeWhatsAppMessage(message) : "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const baseUrl = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
  const textParam = encodedMessage ? `&text=${encodedMessage}` : "";

  return `${baseUrl}?phone=${phoneNumber}${textParam}`;
}

// Brand filter click bindings
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    renderProducts();
  });
});

// Selector change micro-interaction to update button state dynamically
productPicker.addEventListener("change", (event) => {
  const select = event.target.closest(".variant-select");
  if (!select) return;
  const card = select.closest(".product-card");
  if (!card) return;
  const productId = select.dataset.productId;
  const variantValue = select.value;
  const cartItemId = productId + "_" + variantValue;
  
  const addButton = card.querySelector("[data-add]");
  if (addButton) {
    const isInCart = cart.some((item) => item.id === cartItemId);
    addButton.classList.toggle("in-cart", isInCart);
    addButton.textContent = isInCart ? "Sumar otro" : "Agregar";
  }
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
  const message = buildMessage();
  const encodedMessage = encodeWhatsAppMessage(message);
  const url = buildWhatsAppUrl(message);
  console.log(message);
  console.log("Mensaje WhatsApp codificado:", encodedMessage);
  console.log("URL WhatsApp:", url);
  window.open(url, "_blank");
});

whatsappLinks.forEach((link) => {
  link.href = buildWhatsAppUrl(link.dataset.whatsappMessage || "");
});

renderProducts();
renderCart();
