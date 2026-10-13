/**
 * متجر عسل امتياز (Emtiaz Honey Store) - JavaScript Application
 * تطوير وتصميم: Mahmoud Osman (mahmoudbadran338@gmail.com)
 */

// =================== إعدادات المتجر ورقم الواتساب ===================
const STORE_CONFIG = {
  storeName: 'عسل امتياز',
  whatsappPhone: '201034161648',
  displayPhone: '01034161648',
  developer: {
    name: 'Mahmoud Osman',
    email: 'mahmoudbadran338@gmail.com'
  },
  // شحن مجاني 100% على كافة المنتجات
  freeShippingThreshold: 0,
  defaultShippingCost: 0
};

// =================== قاعدة بيانات المنتجات الافتراضية ===================
const DEFAULT_PRODUCTS = [
  {
    "id": "clover-honey",
    "name": "عسل زهرة البرسيم",
    "category": "honey",
    "badge": "الأكثر طلباً 🍯",
    "image": "images/product_clover.jpg",
    "description": "عسل مصري طبيعي كلاسيكي خفيف ولذيذ، مستخلص من رحيق أزهار البرسيم بلونه الذهبي الفاتح ومذاقه السكري اللطيف. مثالي كبديل يومي صحي للسكر الأبيض ومحبب لجميع أفراد الأسرة.",
    "benefits": [
      "مهدئ للمعدة ويحسن حركة الجهاز الهضمي والقولون",
      "بديل صحي يومي لتحلية المشروبات والحلويات للأطفال",
      "خفيف وسريع الامتصاص يمد الجسم بنشاط فوري"
    ],
    "rating": 4.9,
    "reviews": 142,
    "weights": {
      "500": {
        "price": 130,
        "oldPrice": 160,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 240,
        "oldPrice": 300,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 1000
  },
  {
    "id": "citrus-honey",
    "name": "عسل زهرة الموالح",
    "category": "honey",
    "badge": "غني بفيتامين C 🍊",
    "image": "images/product_citrus.jpg",
    "description": "مستخلص من رحيق أزهار أشجار البرتقال والليمون، يتميز بنكهة منعشة ورائحة حمضية زكية وقوام خفيف سائل غني بالفيتامينات والمعادن لرفع كفاءة الجهاز التنفسي.",
    "benefits": [
      "فعال جداً في تهدئة السعال ومقاومة نزلات البرد والإنفلونزا",
      "مهدئ للأعصاب ويساعد على نوم هادئ ومريح ومفيد للأطفال",
      "خفيف وسهل الهضم ومثالي على الريق صباحاً"
    ],
    "rating": 4.9,
    "reviews": 118,
    "weights": {
      "500": {
        "price": 150,
        "oldPrice": 180,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 270,
        "oldPrice": 330,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "black-seed-honey",
    "name": "عسل حبة البركة",
    "category": "honey",
    "badge": "مناعة فائقة 🌿",
    "image": "images/product_blackseed.jpg",
    "description": "يجمع بين فوائد عسل النحل الخام والخصائص العلاجية لرحيق أزهار الحبة السوداء. لونه داكن مائل للسواد ومذاقه دافئ ومميز لتقوية مناعة الجسم.",
    "benefits": [
      "تقوية الجهاز المناعي ومضاد طبيعي قوي للبكتيريا والفيروسات",
      "توسيع الشعب الهوائية وتخفيف أزمات الربو وحساسية الصدر",
      "دعم صحة القلب وتنشيط الدورة الدموية العامة"
    ],
    "rating": 4.8,
    "reviews": 95,
    "weights": {
      "500": {
        "price": 180,
        "oldPrice": 220,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 330,
        "oldPrice": 390,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "marjoram-honey",
    "name": "عسل البردقوش",
    "category": "honey",
    "badge": "صحة وتوازن 🍃",
    "image": "images/product_marjoram.jpg",
    "description": "عسل نحل نقي مستخلص من رحيق أزهار عشبة البردقوش الطبية. يتميز برائحته العشبية العطرة ومذاقه الفريد، ويعتبر من أفضل أنواع العسل لتهدئة الأعصاب وتوازن الجسم.",
    "benefits": [
      "تنظيم ضغط الدم وتخفيف الصداع العصبي والتوتر",
      "تهدئة تقلصات القولون العصبي وتحسين الهضم والانتفاخ",
      "مفيد جداً في ضبط التوازن الهرموني والاسترخاء"
    ],
    "rating": 4.8,
    "reviews": 64,
    "weights": {
      "500": {
        "price": 160,
        "oldPrice": 195,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 290,
        "oldPrice": 350,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "nuts-honey",
    "name": "عسل بالمكسرات",
    "category": "nuts",
    "badge": "طاقة متكاملة ⚡",
    "image": "images/product_nuts.jpg",
    "description": "مزيج فاخر من عسل النحل النقي مع تشكيلة مكسرات ملكية طازجة كاملة (عين جمل، لوز، كاجو، وبندق). البرطمان مليان مكسرات مكثفة من القاع للقمة بدون أي تسخين.",
    "benefits": [
      "غني بالأوميجا 3 والبروتين النباتي لدعم الذاكرة والتركيز",
      "وجبة سناك صحية متكاملة تمنحك طاقة تدوم طوال اليوم للرياضيين",
      "مكسرات طازجة ومقرمشة بدون أي زيوت مهدرجة أو أملاح"
    ],
    "rating": 5.0,
    "reviews": 230,
    "weights": {
      "500": {
        "price": 280,
        "oldPrice": 340,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 520,
        "oldPrice": 620,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 1000
  },
  {
    "id": "clover-honeycomb",
    "name": "شمع العسل زهرة البرسيم",
    "category": "honeycomb",
    "badge": "أقراص شمعية نقية 🍯",
    "image": "images/product_honeycomb_clover.jpg",
    "description": "أقراص شمع عسل نحل طبيعي 100% بعيونها السداسية المليئة بعسل زهرة البرسيم الصافي كما أنتجها النحل في الخلية بدون أي تصفية أو فرز. تجربة تذوق طبيعية أصلية مقرمشة ولذيذة.",
    "benefits": [
      "مضغ الشمع الطبيعي ينظف الأسنان ويعالج تقرحات الفم والجيوب الأنفية",
      "عسل خام 100% غير مصفى بجميع إنزيماته الطبيعية وحبوب رحيقه",
      "قوام شمعي مقرمش طبيعي وفاخر في التقديم"
    ],
    "rating": 4.9,
    "reviews": 86,
    "weights": {
      "500": {
        "price": 140,
        "oldPrice": 175,
        "label": "قرص نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 260,
        "oldPrice": 320,
        "label": "قرص 1 كجم كامل"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "sidr-honey",
    "name": "عسل السدر الجبلي",
    "category": "honey",
    "badge": "ملك الأعسال 👑",
    "image": "images/product_sidr.jpg",
    "description": "مستخلص من زهور أشجار السدر الجبلية النقية، يتميز بقوامه الكثيف ولونه العنبري الداكن ومذاقه العطري الفاخر. مقوٍ عام ومضاد أكسدة استثنائي.",
    "benefits": [
      "تعزيز كفاءة الجهاز المناعي ومقاومة الأمراض والعدوى",
      "دعم صحة الكبد وتطهير المعدة وعلاج مشكلات الهضم",
      "مصدر طاقة نقي وقوي للرياضيين وكبار السن"
    ],
    "rating": 5.0,
    "reviews": 175,
    "weights": {
      "500": {
        "price": 320,
        "oldPrice": 380,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 590,
        "oldPrice": 700,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "happy-mix",
    "name": "خلطة السعادة للمتزوجين",
    "category": "honey",
    "badge": "طاقة وخصوبة ⚡",
    "image": "images/product_happy_mix.jpg",
    "description": "الخلطة الملكية الأكثر طلباً للرجال والنساء! تركيبة طبيعية مركزة تجمع عسل النحل النقي مع أنقى غذاء ملكات النحل، وحبوب اللقاح، والجنسنج الكوري الأحمر، والبروبوليس (صمغ النحل). تمنحك طاقة حيوية استثنائية ونشاطاً متجدداً.",
    "benefits": [
      "زيادة الكفاءة البدنية والقدرة الجنسية والخصوبة للطرفين",
      "مقاومة الإجهاد والتوتر العصبي وتنشيط الدورة الدموية العامة",
      "غنية بمضادات الأكسدة والإنزيمات الحيوية لرفع المناعة والنشاط اليومي"
    ],
    "rating": 5.0,
    "reviews": 164,
    "weights": {
      "500": {
        "price": 360,
        "oldPrice": 440,
        "label": "نصف كيلو (500 جم)"
      },
      "1000": {
        "price": 680,
        "oldPrice": 820,
        "label": "1 كيلو (1000 جم)"
      }
    },
    "defaultWeight": 500
  },
  {
    "id": "saving-bundle",
    "name": "بكج التوفير الاقتصادي (3 برطمانات)",
    "category": "bundles",
    "badge": "وفر 230 ج.م 💥",
    "image": "images/product_bundle.jpg",
    "description": "العرض العائلي الأقوى! تشكيلة متكاملة تضم 3 برطمانات من أجود أنواع العسل: (برطمان عسل زهرة البرسيم 1كجم + برطمان عسل زهرة الموالح 1كجم + برطمان عسل بالمكسرات الفاخرة 1كجم) مع شحن مجاني لكافة محافظات مصر.",
    "benefits": [
      "توفير فوري يصل إلى 230 جنيه مقارنة بشراء كل برطمان منفرداً",
      "تشكيلة متكاملة ترضي جميع أذواق الأسرة للأطفال والكبار",
      "شحن مجاني مباشر إلى باب بيتك مع إمكانية المعاينة قبل الاستلام"
    ],
    "rating": 5.0,
    "reviews": 310,
    "weights": {
      "500": {
        "price": 520,
        "oldPrice": 640,
        "label": "بكج 3 برطمانات (نصف كيلو)"
      },
      "1000": {
        "price": 960,
        "oldPrice": 1190,
        "label": "بكج 3 برطمانات (1 كيلو)"
      }
    },
    "defaultWeight": 1000
  }
];

function loadProducts() {
  const custom = localStorage.getItem('emtiaz_custom_products');
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return DEFAULT_PRODUCTS;
}

let PRODUCTS = loadProducts();

// =================== إدارة حالة التطبيق (State) ===================
const AppState = {
  currentCategory: 'all',
  searchQuery: '',
  selectedWeights: {},
  cart: JSON.parse(localStorage.getItem('emtiaz_cart')) || []
};

// =================== تهيئة وتشغيل التطبيق ===================
document.addEventListener('DOMContentLoaded', () => {
  initWeights();
  renderProducts();
  setupFilterButtons();
  setupSearchInput();
  setupCartDrawer();
  updateCartBadge();
  setupModals();
  setupFloatingWhatsapp();
  setupMobileNav();
});

function setupMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
}

function initWeights() {
  PRODUCTS.forEach(p => {
    if (!AppState.selectedWeights[p.id]) {
      AppState.selectedWeights[p.id] = p.defaultWeight;
    }
  });
}

// =================== عرض المنتجات في الشبكة ===================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCategory = AppState.currentCategory === 'all' || p.category === AppState.currentCategory;
    const matchSearch = p.name.includes(AppState.searchQuery) || p.description.includes(AppState.searchQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: #8C7A68;">
        <div style="font-size: 50px; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 20px; color: #261B0E; margin-bottom: 6px;">لا توجد منتجات مطابقة للبحث</h3>
        <p>جرب البحث باسم عسل آخر أو اختر تصنيفاً مختلفاً.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const activeWeight = AppState.selectedWeights[product.id] || product.defaultWeight;
    const weightData = product.weights[activeWeight] || Object.values(product.weights)[0];
    const availableWeights = Object.keys(product.weights);

    return `
      <div class="product-card" data-id="${product.id}">
        <span class="product-badge-tag">${product.badge}</span>
        
        <div class="product-img-wrap" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" id="img-${product.id}" alt="${product.name}" loading="lazy">
          <button type="button" class="product-quick-btn">👁️ معاينة سريعة</button>
        </div>

        <div class="product-body">
          <span class="product-category">${getCategoryLabel(product.category)}</span>
          <h3 class="product-title" onclick="openQuickView('${product.id}')" style="cursor: pointer;">${product.name}</h3>

          <div class="product-rating">
            ★★★★★ <span>(${product.reviews} تقييم)</span>
          </div>

          <!-- مبدل الوزن التفاعلي (كيلو ونصف كيلو) -->
          <div class="weight-switcher" id="switcher-${product.id}">
            ${availableWeights.map(wKey => {
              const isSelected = String(wKey) === String(activeWeight);
              const label = formatWeightBtnLabel(product, wKey);
              return `
                <button type="button" class="weight-btn ${isSelected ? 'active' : ''}" 
                        onclick="switchWeight('${product.id}', '${wKey}')">
                  ${label}
                </button>
              `;
            }).join('')}
          </div>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-unit-old" id="oldprice-${product.id}">${weightData.oldPrice} ج.م</span>
              <div class="price-unit-current" id="price-${product.id}">
                ${weightData.price} <span>ج.م</span>
              </div>
            </div>

            <button type="button" class="btn-add-cart" id="addbtn-${product.id}" onclick="handleAddToCart('${product.id}')">
              <span>🛒</span> أضف للسلة
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function formatWeightBtnLabel(product, weightKey) {
  if (product && product.weights[weightKey] && product.weights[weightKey].label) {
    return product.weights[weightKey].label;
  }
  if (weightKey === '500') return 'نصف كيلو (500 جم)';
  if (weightKey === '1000') return '1 كيلو (1000 جم)';
  return weightKey + ' جم';
}

function getCategoryLabel(cat) {
  if (cat === 'honey') return '🍯 عسل نحل طبيعي';
  if (cat === 'nuts') return '🌰 عسل بالمكسرات';
  if (cat === 'honeycomb') return '🐝 شمع العسل الطبيعي';
  if (cat === 'bundles') return '💥 عروض وبكجات التوفير';
  return 'عسل امتياز';
}

// =================== تبديل الوزن والأسعار ===================
window.switchWeight = function(productId, weightKey) {
  AppState.selectedWeights[productId] = weightKey;
  
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const weightData = product.weights[weightKey];
  if (!weightData) return;
  
  const priceEl = document.getElementById(`price-${productId}`);
  const oldPriceEl = document.getElementById(`oldprice-${productId}`);
  if (priceEl) priceEl.innerHTML = `${weightData.price} <span>ج.م</span>`;
  if (oldPriceEl) oldPriceEl.textContent = `${weightData.oldPrice} ج.م`;

  const switcher = document.getElementById(`switcher-${productId}`);
  if (switcher) {
    const btns = switcher.querySelectorAll('.weight-btn');
    btns.forEach(btn => {
      const isMatch = btn.textContent.includes(weightKey === '500' ? '500' : '1000');
      btn.classList.toggle('active', isMatch);
    });
  }
};

// =================== البحث والفلترة ===================
function setupFilterButtons() {
  const buttons = document.querySelectorAll('[data-category]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });
}

function setupSearchInput() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.trim();
    renderProducts();
  });
}

// =================== إضافة المنتج للسلة ===================
window.handleAddToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const weightKey = AppState.selectedWeights[productId] || product.defaultWeight;
  const weightData = product.weights[weightKey] || Object.values(product.weights)[0];
  const existing = AppState.cart.find(item => item.productId === productId && String(item.weightKey) === String(weightKey));

  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({
      productId: productId,
      weightKey: weightKey,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  
  const addBtn = document.getElementById(`addbtn-${productId}`);
  if (addBtn) {
    const origHtml = addBtn.innerHTML;
    addBtn.innerHTML = '✓ تمت الإضافة!';
    addBtn.style.background = '#2E7D32';
    setTimeout(() => {
      addBtn.innerHTML = origHtml;
      addBtn.style.background = '';
    }, 1200);
  }

  showToast(`🍯 تم إضافة "${product.name} (${weightData.label})" إلى سلتك!`);
  openCartDrawer();
};

function saveCart() {
  localStorage.setItem('emtiaz_cart', JSON.stringify(AppState.cart));
}

function updateCartBadge() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function setupCartDrawer() {
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  const openButtons = document.querySelectorAll('[data-open-cart]');
  const closeButton = document.getElementById('cartCloseBtn');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCartDrawer();
      openCartDrawer();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeCartDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeCartDrawer();
    });
  }
}

function openCartDrawer() {
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  if (drawerOverlay) drawerOverlay.classList.add('open');
  const floatBtn = document.getElementById('floatingWhatsappBtn');
  if (floatBtn) floatBtn.style.setProperty('display', 'none', 'important');
}

function closeCartDrawer() {
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  if (drawerOverlay) drawerOverlay.classList.remove('open');
  const floatBtn = document.getElementById('floatingWhatsappBtn');
  if (floatBtn) floatBtn.style.setProperty('display', 'flex', 'important');
}

function renderCartDrawer() {
  const body = document.getElementById('cartBody');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const whatsappBtn = document.getElementById('cartWhatsappBtn');

  if (!body) return;

  if (AppState.cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <h3>سلة التسوق فارغة حالياً</h3>
        <p style="font-size: 13.5px; margin-top: 6px;">تصفح تشكيلة عسل امتياز وأضف منتجاتك المفضلة لتصلك لباب بيتك مع شحن مجاني.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '0 ج.م';
    if (shippingEl) shippingEl.textContent = 'شحن مجاني 🚚';
    if (totalEl) totalEl.textContent = '0 ج.م';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    if (whatsappBtn) whatsappBtn.style.display = 'none';
    return;
  }

  if (checkoutBtn) checkoutBtn.style.display = 'flex';
  if (whatsappBtn) whatsappBtn.style.display = 'flex';

  let subtotal = 0;

  body.innerHTML = AppState.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';

    const weightInfo = product.weights[item.weightKey] || Object.values(product.weights)[0];
    const itemTotal = weightInfo.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${product.name}</div>
          <span class="cart-item-weight">${weightInfo.label}</span>
          <div class="cart-item-price">${weightInfo.price} ج.م</div>
        </div>

        <div class="cart-item-controls">
          <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.productId}', '${item.weightKey}', -1)">-</button>
          <span style="font-weight: 800; font-size: 14px; min-width: 18px; text-align: center;">${item.qty}</span>
          <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.productId}', '${item.weightKey}', 1)">+</button>
          <button type="button" class="cart-item-remove" onclick="removeCartItem('${item.productId}', '${item.weightKey}')">🗑️</button>
        </div>
      </div>
    `;
  }).join('');

  // شحن مجاني لكافة الطلبات
  const grandTotal = subtotal;

  if (subtotalEl) subtotalEl.textContent = subtotal + ' ج.م';
  if (shippingEl) shippingEl.textContent = 'شحن مجاني 100% 🚚';
  if (totalEl) totalEl.textContent = grandTotal + ' ج.م';
}

window.updateCartItemQty = function(productId, weightKey, change) {
  const item = AppState.cart.find(i => i.productId === productId && String(i.weightKey) === String(weightKey));
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    AppState.cart = AppState.cart.filter(i => !(i.productId === productId && String(i.weightKey) === String(weightKey)));
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
};

window.removeCartItem = function(productId, weightKey) {
  AppState.cart = AppState.cart.filter(i => !(i.productId === productId && String(i.weightKey) === String(weightKey)));
  saveCart();
  updateCartBadge();
  renderCartDrawer();
};

// =================== نوافذ المعاينة والطلب (Modals) ===================
function setupModals() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeModal(m.id);
    });
  });

  // ربط جميع روابط إيميل المطور بفتح نافذة المراسلة التفاعلية فوراً
  document.querySelectorAll('.top-dev-email, .dev-email-link, a[href*="mahmoudbadran338"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openDevContactModal(e);
      return false;
    });
  });

  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  const whatsappCartBtn = document.getElementById('cartWhatsappBtn');
  if (whatsappCartBtn) {
    whatsappCartBtn.addEventListener('click', sendCartToWhatsApp);
  }

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
}

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  const activeWeight = AppState.selectedWeights[product.id] || product.defaultWeight;
  const weightData = product.weights[activeWeight] || Object.values(product.weights)[0];
  const availableWeights = Object.keys(product.weights);

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-image-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div>
        <span style="font-size: 12px; color: var(--color-primary-dark); font-weight: 800;">${getCategoryLabel(product.category)}</span>
        <h2 style="font-size: 22px; font-weight: 900; margin: 4px 0 10px; color: #261B0E;">${product.name}</h2>
        <div style="color: #E6A21A; font-size: 13px; margin-bottom: 12px;">★★★★★ <span>(${product.reviews} تقييم حقيقي)</span></div>

        <p style="font-size: 14px; color: #574635; line-height: 1.7; margin-bottom: 14px;">${product.description}</p>

        <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 6px;">أبرز الفوائد الصحية:</h4>
        <ul style="font-size: 13px; color: #4A3A2A; padding-right: 20px; line-height: 1.8; margin-bottom: 16px;">
          ${product.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div style="margin-bottom: 14px;">
          <label style="font-size: 13px; font-weight: 800; display: block; margin-bottom: 6px;">اختر وزن العبوة:</label>
          <div class="weight-switcher" style="margin-bottom: 0;">
            ${availableWeights.map(wKey => {
              const isSelected = String(wKey) === String(activeWeight);
              return `
                <button type="button" class="weight-btn ${isSelected ? 'active' : ''}" 
                        onclick="switchWeight('${product.id}', '${wKey}'); openQuickView('${product.id}');">
                  ${formatWeightBtnLabel(product, wKey)}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 20px; padding-top: 14px; border-top: 1px solid #EADBCE; flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-size: 12px; color: #8C7A68; text-decoration: line-through;">${weightData.oldPrice} ج.م</div>
            <div style="font-size: 24px; font-weight: 900; color: var(--color-primary-dark);">${weightData.price} <span style="font-size: 14px;">ج.م</span></div>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" class="btn-whatsapp-prod" onclick="orderProductWhatsApp('${product.id}')" title="اطلب هذا المنتج مباشرة على الواتساب">
              💬 اطلب عبر الواتساب
            </button>
            <button type="button" class="btn-primary" style="padding: 12px 20px;" 
                    onclick="handleAddToCart('${product.id}'); closeModal('quickViewModal');">
              🛒 أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

function openCheckoutModal() {
  if (AppState.cart.length === 0) return;
  const modal = document.getElementById('checkoutModal');
  const summaryBox = document.getElementById('checkoutSummaryBox');
  if (!modal || !summaryBox) return;

  let subtotal = 0;
  const itemsHtml = AppState.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';
    const weightInfo = product.weights[item.weightKey];
    const total = weightInfo.price * item.qty;
    subtotal += total;
    return `
      <div style="display: flex; justify-content: space-between; font-size: 13.5px; margin-bottom: 6px;">
        <span>${product.name} (${weightInfo.label}) × ${item.qty}</span>
        <b>${total} ج.م</b>
      </div>
    `;
  }).join('');

  // شحن مجاني لكافة الطلبات
  const grandTotal = subtotal;

  summaryBox.innerHTML = `
    <div style="border-bottom: 1px dashed #EADBCE; padding-bottom: 10px; margin-bottom: 10px;">
      ${itemsHtml}
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 13.5px; margin-bottom: 4px;">
      <span>المجموع الفرعي:</span>
      <b>${subtotal} ج.م</b>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 13.5px; margin-bottom: 8px;">
      <span>تكلفة الشحن:</span>
      <b style="color: #2E7D32;">شحن مجاني لكافة المحافظات 🚚</b>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 17px; font-weight: 900; color: var(--color-primary-dark); border-top: 1px solid #EADBCE; padding-top: 8px;">
      <span>الإجمالي المستحق عند الاستلام:</span>
      <span>${grandTotal} ج.م</span>
    </div>
  `;

  modal.classList.add('open');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const gov = document.getElementById('custGov').value;
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes') ? document.getElementById('custNotes').value.trim() : '';

  if (!name || !phone || !gov || !address) {
    alert('يرجى ملء جميع الحقول المطلوبة');
    return;
  }

  const orderId = 'EMT-' + Math.floor(100000 + Math.random() * 900000);
  let subtotal = 0;
  let itemsSummary = '';

  AppState.cart.forEach((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const weightInfo = product.weights[item.weightKey];
    const total = weightInfo.price * item.qty;
    subtotal += total;
    itemsSummary += `${index + 1}. *${product.name}* (${weightInfo.label})\n   الكمية: ${item.qty} | السعر: ${total} ج.م\n`;
  });

  // حفظ الطلب كاملاً في localStorage لإدارته في لوحة تحكم الإدارة (admin.html)
  const newOrder = {
    id: orderId,
    customer: { name, phone, gov, address, notes },
    items: AppState.cart.map(item => {
      const p = PRODUCTS.find(prod => prod.id === item.productId);
      const w = p ? p.weights[item.weightKey] : null;
      return {
        name: p ? p.name : item.productId,
        weight: w ? w.label : item.weightKey,
        price: w ? w.price : 0,
        qty: item.qty
      };
    }),
    subtotal: subtotal,
    shipping: 0,
    total: subtotal,
    date: new Date().toLocaleString('ar-EG'),
    status: 'جديد (قيد التجهيز)'
  };

  try {
    const existingOrders = JSON.parse(localStorage.getItem('emtiaz_orders') || '[]');
    existingOrders.unshift(newOrder);
    localStorage.setItem('emtiaz_orders', JSON.stringify(existingOrders));
  } catch (err) {
    console.error('Error saving order', err);
  }

  // صياغة رسالة الواتساب الرسمية لتصل مباشرة لرقم صاحب المتجر (01034161648)
  let msg = `🍯 *طلب جديد من متجر عسل امتياز (الدفع عند الاستلام)* 📦\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🆔 *رقم الطلب:* ${orderId}\n`;
  msg += `📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}\n\n`;
  msg += `👤 *بيانات العميل:* \n`;
  msg += `• *الاسم:* ${name}\n`;
  msg += `• *رقم الهاتف:* ${phone}\n`;
  msg += `• *المحافظة:* ${gov}\n`;
  msg += `• *العنوان بالتفصيل:* ${address}\n`;
  if (notes) {
    msg += `• *ملاحظات إضافية:* ${notes}\n`;
  }
  msg += `\n🛒 *محتويات الطلب:*\n${itemsSummary}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *إجمالي المنتجات:* ${subtotal} ج.م\n`;
  msg += `🚚 *تكلفة الشحن:* مجاني 100% لجميع المحافظات\n`;
  msg += `💵 *المبلغ المطلوب عند الاستلام:* ${subtotal} ج.م\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `يرجى تأكيد تجهيز الشحنة والتواصل مع العميل لتحديد موعد التسليم. شكراً لك!`;

  closeModal('checkoutModal');

  // تحويل البيانات فوراً للواتساب إلى رقم المتجر
  const merchantPhone = STORE_CONFIG.whatsappPhone;
  const whatsappUrl = `https://wa.me/${merchantPhone}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');

  // إظهار نافذة النجاح مع رابط الواتساب البديل
  const orderSuccessModal = document.getElementById('orderSuccessModal');
  const orderSuccessMsg = document.getElementById('orderSuccessMsg');

  if (orderSuccessModal && orderSuccessMsg) {
    orderSuccessMsg.innerHTML = `
      شكراً لثقتك في عسل امتياز يا <strong>${name}</strong>!<br>
      رقم طلبك هو: <strong style="color: var(--color-primary);">${orderId}</strong>.<br><br>
      ✅ <strong>تم تحويل بيانات طلبك وتفاصيل العنوان بنجاح إلى واتساب الإدارة (${STORE_CONFIG.displayPhone})</strong> لتأكيد الشحن فوراً.<br><br>
      <a href="${whatsappUrl}" target="_blank" class="cart-whatsapp-btn" style="margin-top: 10px; text-decoration: none; display: inline-flex;">
        💬 فتح تفاصيل الطلب على الواتساب مرة أخرى
      </a>
    `;
    orderSuccessModal.classList.add('open');
  }

  // تفريغ السلة وتحديث الواجهة
  AppState.cart = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  document.getElementById('checkoutForm').reset();
}

function sendCartToWhatsApp() {
  if (AppState.cart.length === 0) return;

  let message = 'السلام عليكم ورحمة الله، أود تأكيد طلب المنتجات التالية من متجر عسل امتياز:\n\n';
  let subtotal = 0;

  AppState.cart.forEach((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const weightInfo = product.weights[item.weightKey];
    const total = weightInfo.price * item.qty;
    subtotal += total;
    message += `${index + 1}. *${product.name}*\n   - الوزن: ${weightInfo.label}\n   - الكمية: ${item.qty}\n   - السعر: ${total} ج.م\n\n`;
  });

  message += `------------------------\n`;
  message += `💰 *إجمالي المنتجات:* ${subtotal} ج.م\n`;
  message += `🚚 *الشحن:* مجاني بالكامل لكافة المحافظات\n`;
  message += `✨ *المبلغ المستحق عند الاستلام:* ${subtotal} ج.م\n\n`;
  message += `يرجى تأكيد موعد الشحن والتوصيل. شكراً لكم!`;

  const phone = STORE_CONFIG.whatsappPhone;
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

function setupFloatingWhatsapp() {
  if (document.getElementById('floatingWhatsappBtn')) return;
  const btn = document.createElement('a');
  btn.id = 'floatingWhatsappBtn';
  btn.href = `https://wa.me/${STORE_CONFIG.whatsappPhone}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار والطلب من متجر عسل امتياز')}`;
  btn.target = '_blank';
  btn.title = `تواصل عبر الواتساب (${STORE_CONFIG.displayPhone})`;
  btn.innerHTML = `💬 <span style="font-size: 13.5px; font-weight: 800; margin-right: 6px;">تواصل واتساب (${STORE_CONFIG.displayPhone})</span>`;
  btn.style.cssText = `
    position: fixed !important;
    bottom: 24px !important;
    right: 24px !important;
    left: auto !important;
    z-index: 1000 !important;
    background: #25D366;
    color: #FFFFFF;
    padding: 12px 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    font-size: 17px;
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
    font-family: 'Cairo', sans-serif;
    transition: transform 0.2s, box-shadow 0.2s;
  `;
  btn.onmouseenter = () => btn.style.transform = 'scale(1.05)';
  btn.onmouseleave = () => btn.style.transform = 'scale(1)';
  document.body.appendChild(btn);
}

// =================== دوال التفاعل مع الإيميل وقاعدة البيانات والباركود ===================
function orderProductWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const activeWeight = AppState.selectedWeights[product.id] || product.defaultWeight;
  const weightData = product.weights[activeWeight] || Object.values(product.weights)[0];
  const weightLabel = weightData.label;
  const price = weightData.price;

  let msg = `السلام عليكم ورحمة الله، أود الاستفسار والطلب من متجر عسل امتياز:\n\n`;
  msg += `🍯 *المنتج المطلوب:* ${product.name}\n`;
  msg += `⚖️ *الوزن:* ${weightLabel}\n`;
  msg += `💰 *السعر:* ${price} ج.م (شحن مجاني 100% لكافة المحافظات والدفع عند الاستلام)\n\n`;
  msg += `يرجى تزويدي بطريقة تأكيد الطلب وموعد التوصيل. شكراً لكم!`;

  window.open(`https://wa.me/${STORE_CONFIG.whatsappPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleDevContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('devSenderName').value.trim();
  const contact = document.getElementById('devSenderContact').value.trim();
  const subject = document.getElementById('devMsgSubject').value.trim() || 'رسالة استفسار للمطور';
  const body = document.getElementById('devMsgBody').value.trim();
  const submitBtn = document.getElementById('devSubmitBtn');

  if (submitBtn) {
    submitBtn.textContent = '⏳ جاري الحفظ والإرسال...';
    submitBtn.disabled = true;
  }

  // 1. تسجيل الرسالة في قاعدة بيانات رسائل المطور المحلية (localStorage)
  const newMsgRecord = {
    id: 'MSG-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleString('ar-EG'),
    sender_name: name,
    sender_contact: contact,
    subject: subject,
    message: body
  };

  try {
    const existingMsgs = JSON.parse(localStorage.getItem('emtiaz_dev_messages') || '[]');
    existingMsgs.unshift(newMsgRecord);
    localStorage.setItem('emtiaz_dev_messages', JSON.stringify(existingMsgs));
  } catch(err) {
    console.error('Error saving message locally', err);
  }

  // 2. إرسال الرسالة إلى سيرفر قاعدة البيانات لحفظها في ملف JSON (data/dev_messages.json)
  fetch('/api/dev-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMsgRecord)
  }).catch(e => console.log('Server API not reachable directly, saved in local database'));

  // 3. الإرسال الفعلي عبر FormSubmit AJAX إلى mahmoudbadran338@gmail.com
  fetch('https://formsubmit.co/ajax/mahmoudbadran338@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      'اسم_المرسل': name,
      'بيانات_التواصل': contact,
      'الموضوع': subject,
      'نص_الرسالة': body,
      '_subject': `[متجر عسل امتياز] ${subject}`
    })
  })
  .then(res => res.json())
  .then(data => {
    showToast('✅ تم حفظ رسالتك في قاعدة البيانات وإرسالها للمطور بنجاح!');
    closeModal('devContactModal');
    document.getElementById('devContactForm').reset();
  })
  .catch(err => {
    // البديل: حفظت في الداتا بيز وتحويل للتطبيق
    showToast('✅ تم حفظ الرسالة في قاعدة البيانات بنجاح!');
    closeModal('devContactModal');
    document.getElementById('devContactForm').reset();
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.textContent = '✉️ إرسال الرسالة إلى الإيميل الآن';
      submitBtn.disabled = false;
    }
  });
}

function showToast(msg) {
  let toast = document.getElementById('storeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'storeToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: #1C140A;
      color: #FFFFFF;
      border: 1px solid #C68A24;
      padding: 14px 24px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 800;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      z-index: 10000;
      display: none;
      font-family: 'Cairo', sans-serif;
      animation: fadeIn 0.3s;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3200);
}

// =================== دوال التحكم العالمية بالنوافذ المنبثقة ===================
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
  }
};

window.openDevContactModal = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const modal = document.getElementById('devContactModal');
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    const firstInput = document.getElementById('devSenderName');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  } else {
    window.location.href = 'mailto:mahmoudbadran338@gmail.com?subject=استفسار%20عن%20متجر%20عسل%20امتياز';
  }
};

