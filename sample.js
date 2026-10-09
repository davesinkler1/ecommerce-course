         // -------------------------------------------------------------
        // 1. DATA PRODUCTS (50 Items with rich details & Unsplash URLs)
        // -------------------------------------------------------------
        const productsData = [
            { id: 1, name: "RAM", category: "Elektronik", price: 50000, rating: 4.9, desc: "RAM for your computer needs.", image: "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4" },
            { id: 2, name: "SSD", category: "Elektronik", price: 60000, rating: 4.8, desc: "SSD for your computer needs", image: "https://plus.unsplash.com/premium_photo-1721133221361-4f2b2af3b6fe?q=80&w=870&auto=format&fit=crop&i" },
            { id: 3, name: "SBC", category: "Elektronik", price: 70000, rating: 4.6, desc: "SBC for your electronics needs", image: "https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?q=80&w=740&auto=format&fit=crop&ixlib=r" },
            { id: 4, name: "Hoodie", category: "Elektronik", price: 80000, rating: 4.9, desc: "Hoodie for your clothing needs", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=772&auto=format&fit=crop&ixlib=r" },
        ];

        // -------------------------------------------------------------
        // 2. STATE MANAGEMENT
        // -------------------------------------------------------------
        let currentCategory = 'Semua';
        let searchQuery = '';
        let maxPriceFilter = 50000000;
        let minRatingFilter = 0;
        let currentSort = 'default';
        let currentPage = 1;
        const itemsPerPage = 12;

        let cart = JSON.parse(localStorage.getItem('nexa_cart')) || [];
        let wishlist = JSON.parse(localStorage.getItem('nexa_wishlist')) || [];

        // -------------------------------------------------------------
        // 3. INITIALIZATION
        // -------------------------------------------------------------
        window.onload = function() {
            renderCategories();
            setupEventListeners();
            applyFilters();
            updateCartUI();
            updateWishlistUI();
            startCarousel();
        };

        // Format Currency Helper
        function formatRupiah(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
        }

        // Render Categories list dynamically
        function renderCategories() {
            const categories = ['Semua', ...new Set(productsData.map(p => p.category))];
            
            const desktopContainer = document.getElementById('category-filters-container');
            const mobileContainer = document.getElementById('mobile-category-filters');

            const createCategoryHTML = (cat) => `
                <button onclick="filterCategory('${cat}')" class="category-btn w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${currentCategory === cat ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-100'}">
                    <span>${cat}</span>
                    <span class="text-xs text-slate-400 font-normal">(${cat === 'Semua' ? productsData.length : productsData.filter(p => p.category === cat).length})</span>
                </button>
            `;

            desktopContainer.innerHTML = categories.map(createCategoryHTML).join('');
            mobileContainer.innerHTML = categories.map(createCategoryHTML).join('');
        }

        // -------------------------------------------------------------
        // 4. EVENT LISTENERS SETUP
        // -------------------------------------------------------------
        function setupEventListeners() {
            // Search Input
            const searchInput = document.getElementById('search-input');
            const mobileSearchInput = document.getElementById('mobile-search-input');
            const clearSearchBtn = document.getElementById('clear-search');

            const handleSearch = (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                if (searchQuery !== '') {
                    clearSearchBtn.classList.remove('hidden');
                } else {
                    clearSearchBtn.classList.add('hidden');
                }
                currentPage = 1;
                applyFilters();
            };

            searchInput.addEventListener('input', handleSearch);
            mobileSearchInput.addEventListener('input', handleSearch);

            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                mobileSearchInput.value = '';
                searchQuery = '';
                clearSearchBtn.classList.add('hidden');
                applyFilters();
            });

            // Price Range Slider
            const priceRange = document.getElementById('price-range');
            const priceValue = document.getElementById('price-value');
            const mobilePriceRange = document.getElementById('mobile-price-range');
            const mobilePriceValue = document.getElementById('mobile-price-value');

            priceRange.addEventListener('input', (e) => {
                maxPriceFilter = parseInt(e.target.value);
                priceValue.textContent = formatRupiah(maxPriceFilter);
                mobilePriceRange.value = maxPriceFilter;
                mobilePriceValue.textContent = formatRupiah(maxPriceFilter);
                currentPage = 1;
                applyFilters();
            });

            mobilePriceRange.addEventListener('input', (e) => {
                maxPriceFilter = parseInt(e.target.value);
                mobilePriceValue.textContent = formatRupiah(maxPriceFilter);
                priceRange.value = maxPriceFilter;
                priceValue.textContent = formatRupiah(maxPriceFilter);
                currentPage = 1;
                applyFilters();
            });


            // Sort Selector
            document.getElementById('sort-select').addEventListener('change', (e) => {
                currentSort = e.target.value;
                applyFilters();
            });
        }

        // Category Filter Action
        function filterCategory(cat) {
            currentCategory = cat;
            renderCategories();
            currentPage = 1;
            applyFilters();
        }

        // Reset All Filters
        function resetFilters() {
            currentCategory = 'Semua';
            searchQuery = '';
            maxPriceFilter = 50000000;
            minRatingFilter = 0;
            currentSort = 'default';
            currentPage = 1;

            document.getElementById('search-input').value = '';
            document.getElementById('mobile-search-input').value = '';
            document.getElementById('clear-search').classList.add('hidden');
            document.getElementById('price-range').value = 50000000;
            document.getElementById('price-value').textContent = 'Rp 50.000.000';
            document.getElementById('mobile-price-range').value = 50000000;
            document.getElementById('mobile-price-value').textContent = 'Rp 50.000.000';
            document.getElementById('rating-filter').value = '0';
            document.getElementById('sort-select').value = 'default';

            renderCategories();
            applyFilters();
            showToast('Filter telah direset.');
        }

        // -------------------------------------------------------------
        // 5. FILTER, SORT & PAGINATION LOGIC
        // -------------------------------------------------------------
        function applyFilters() {
            let filtered = productsData.filter(product => {
                const matchesCategory = currentCategory === 'Semua' || product.category === currentCategory;
                const matchesSearch = product.name.toLowerCase().includes(searchQuery) || product.desc.toLowerCase().includes(searchQuery);
                const matchesPrice = product.price <= maxPriceFilter;
                const matchesRating = product.rating >= minRatingFilter;
                return matchesCategory && matchesSearch && matchesPrice && matchesRating;
            });

            // Sorting logic
            if (currentSort === 'price-low') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (currentSort === 'price-high') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (currentSort === 'name-asc') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            } else if (currentSort === 'name-desc') {
                filtered.sort((a, b) => b.name.localeCompare(a.name));
            } else if (currentSort === 'rating-high') {
                filtered.sort((a, b) => b.rating - a.rating);
            }

            // Update Counts
            document.getElementById('showing-count').textContent = Math.min(filtered.length, itemsPerPage);
            document.getElementById('total-count').textContent = filtered.length;

            renderActiveTags();

            // Handle Empty State
            const grid = document.getElementById('products-grid');
            const emptyState = document.getElementById('empty-state');
            const pagination = document.getElementById('pagination-container');

            if (filtered.length === 0) {
                grid.innerHTML = '';
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
                pagination.innerHTML = '';
                return;
            } else {
                emptyState.classList.add('hidden');
                emptyState.classList.remove('flex');
            }

            // Paginate
            const totalPages = Math.ceil(filtered.length / itemsPerPage);
            if (currentPage > totalPages) currentPage = totalPages;

            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

            document.getElementById('showing-count').textContent = paginatedItems.length;

            renderProductGrid(paginatedItems);
            renderPagination(totalPages);
        }

        // Render Active Filter Pills/Tags
        function renderActiveTags() {
            const container = document.getElementById('active-tags');
            let tagsHTML = '';

            if (currentCategory !== 'Semua') {
                tagsHTML += `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">
                        ${currentCategory}
                        <i onclick="filterCategory('Semua')" class="fa-solid fa-xmark cursor-pointer hover:text-brand-900"></i>
                    </span>
                `;
            }

            if (searchQuery) {
                tagsHTML += `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">
                        Cari: "${searchQuery}"
                        <i onclick="document.getElementById('clear-search').click()" class="fa-solid fa-xmark cursor-pointer hover:text-brand-900"></i>
                    </span>
                `;
            }

            container.innerHTML = tagsHTML;
        }
        

        // -------------------------------------------------------------
        // 6. RENDER PRODUCTS GRID
        // -------------------------------------------------------------
        function renderProductGrid(products) {
            const grid = document.getElementById('products-grid');
            
            grid.innerHTML = products.map(product => {
                const isWishlisted = wishlist.some(id => id === product.id);

                return `
                <div class="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
                    <!-- Image Wrapper -->
                    <div class="relative aspect-square bg-slate-100 overflow-hidden cursor-pointer" onclick="openQuickView(${product.id})">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 loading="lazy">
                        
                        <!-- Badges -->
                        <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
                            <span class="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider">
                                ${product.category}
                            </span>
                        </div>

                        <!-- Wishlist Toggle Button -->
                        <button onclick="event.stopPropagation(); toggleWishlist(${product.id})" 
                            class="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-md hover:bg-white text-slate-600 rounded-full flex items-center justify-center shadow-md transition-colors z-10">
                            <i class="${isWishlisted ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart text-base"></i>
                        </button>

                        <!-- Quick View Hover Overlay -->
                        <div class="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span class="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <i class="fa-solid fa-eye mr-1.5"></i> Quick View
                            </span>
                        </div>
                    </div>

                    <!-- Details -->
                    <div class="p-5 flex flex-col flex-grow justify-between space-y-4">
                        <div>
                            <div class="flex items-center justify-between text-xs text-amber-500 font-semibold mb-1">
                                <span><i class="fa-solid fa-star mr-1"></i>${product.rating}</span>
                                <span class="text-slate-400 font-normal">Stok Tersedia</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-brand-600 transition-colors cursor-pointer" onclick="openQuickView(${product.id})">
                                ${product.name}
                            </h3>
                            <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                                ${product.desc}
                            </p>
                        </div>

                        <div class="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                            <div>
                                <span class="text-xs text-slate-400 block font-medium">Harga</span>
                                <span class="text-lg font-extrabold text-brand-600">${formatRupiah(product.price)}</span>
                            </div>

                            <button onclick="addToCart(${product.id})" class="px-3.5 py-2.5 bg-brand-50 hover:bg-brand-600 text-brand-600 hover:text-white rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm">
                                <i class="fa-solid fa-cart-plus"></i>
                                <span>Beli</span>
                            </button>
                        </div>
                    </div>
                </div>
            `}).join('');
        }

        // Render Pagination Controls
        function renderPagination(totalPages) {
            const container = document.getElementById('pagination-container');
            if (totalPages <= 1) {
                container.innerHTML = '';
                return;
            }

            let buttons = '';
            
            // Previous Button
            buttons += `
                <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled class="opacity-40 cursor-not-allowed"' : ''} 
                    class="w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center justify-center text-sm font-semibold transition-colors">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            `;

            for (let i = 1; i <= totalPages; i++) {
                buttons += `
                    <button onclick="changePage(${i})" 
                        class="w-10 h-10 rounded-xl text-sm font-bold transition-all ${currentPage === i ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}">
                        ${i}
                    </button>
                `;
            }

            // Next Button
            buttons += `
                <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled class="opacity-40 cursor-not-allowed"' : ''} 
                    class="w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center justify-center text-sm font-semibold transition-colors">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            `;

            container.innerHTML = buttons;
        }

        function changePage(page) {
            currentPage = page;
            applyFilters();
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }

        // -------------------------------------------------------------
        // 7. CART SYSTEM
        // -------------------------------------------------------------
        function addToCart(productId) {
            const product = productsData.find(p => p.id === productId);
            const existingIndex = cart.findIndex(item => item.id === productId);

            if (existingIndex > -1) {
                cart[existingIndex].qty += 1;
            } else {
                cart.push({ ...product, qty: 1 });
            }

            saveCart();
            updateCartUI();
            showToast(`"<strong>${product.name}</strong>" ditambahkan ke keranjang!`);
        }

        function updateQty(productId, delta) {
            const item = cart.find(i => i.id === productId);
            if (!item) return;

            item.qty += delta;
            if (item.qty <= 0) {
                removeFromCart(productId);
                return;
            }

            saveCart();
            updateCartUI();
        }

        function removeFromCart(productId) {
            cart = cart.filter(i => i.id !== productId);
            saveCart();
            updateCartUI();
            showToast('Produk dihapus dari keranjang.');
        }

        function saveCart() {
            localStorage.setItem('nexa_cart', JSON.stringify(cart));
        }

        function updateCartUI() {
            const badge = document.getElementById('cart-badge');
            const container = document.getElementById('cart-items-container');
            const subtotalEl = document.getElementById('cart-subtotal');
            const totalEl = document.getElementById('cart-total');

            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

            // Update Badge Counter
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.classList.remove('hidden');
                badge.classList.add('flex');
            } else {
                badge.classList.add('hidden');
            }

            // Subtotal
            subtotalEl.textContent = formatRupiah(totalPrice);
            totalEl.textContent = formatRupiah(totalPrice);

            // Render Items
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-center text-slate-400 py-12">
                        <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-slate-300"></i>
                        <p class="text-sm font-semibold">Keranjang kamu masih kosong.</p>
                        <button onclick="toggleCartDrawer()" class="mt-4 text-xs font-bold text-brand-600 hover:underline">Mulai Belanja Now</button>
                    </div>
                `;
                return;
            }

            container.innerHTML = cart.map(item => `
                <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover" alt="${item.name}">
                    <div class="flex-grow min-w-0">
                        <h4 class="font-bold text-slate-900 text-sm truncate">${item.name}</h4>
                        <span class="text-xs text-brand-600 font-extrabold">${formatRupiah(item.price)}</span>
                        
                        <div class="flex items-center gap-2 mt-2">
                            <button onclick="updateQty(${item.id}, -1)" class="w-6 h-6 bg-white border border-slate-200 rounded-lg text-slate-600 flex items-center justify-center text-xs font-bold hover:bg-slate-100">-</button>
                            <span class="text-xs font-bold text-slate-800 w-5 text-center">${item.qty}</span>
                            <button onclick="updateQty(${item.id}, 1)" class="w-6 h-6 bg-white border border-slate-200 rounded-lg text-slate-600 flex items-center justify-center text-xs font-bold hover:bg-slate-100">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-slate-400 hover:text-rose-500 p-2 text-sm">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `).join('');
        }

        function toggleCartDrawer() {
            const drawer = document.getElementById('cart-drawer');
            const panel = document.getElementById('cart-drawer-panel');
            
            if (drawer.classList.contains('pointer-events-none')) {
                drawer.classList.remove('pointer-events-none', 'opacity-0');
                panel.classList.remove('translate-x-full');
            } else {
                drawer.classList.add('opacity-0', 'pointer-events-none');
                panel.classList.add('translate-x-full');
            }
        }

        function checkout() {
            if (cart.length === 0) {
                showToast('Keranjang Anda kosong!');
                return;
            }
            alert('Terima kasih! Pesanan Anda telah berhasil dibuat (Simulasi Checkout).');
            cart = [];
            saveCart();
            updateCartUI();
            toggleCartDrawer();
        }

        // -------------------------------------------------------------
        // 8. WISHLIST SYSTEM
        // -------------------------------------------------------------
        function toggleWishlist(productId) {
            const index = wishlist.indexOf(productId);
            if (index > -1) {
                wishlist.splice(index, 1);
                showToast('Produk dihapus dari wishlist.');
            } else {
                wishlist.push(productId);
                showToast('Produk ditambahkan ke wishlist!');
            }

            localStorage.setItem('nexa_wishlist', JSON.stringify(wishlist));
            updateWishlistUI();
            applyFilters();
        }

        function updateWishlistUI() {
            const badge = document.getElementById('wishlist-badge');
            if (wishlist.length > 0) {
                badge.textContent = wishlist.length;
                badge.classList.remove('hidden');
                badge.classList.add('flex');
            } else {
                badge.classList.add('hidden');
            }

            const container = document.getElementById('wishlist-items-container');
            if (wishlist.length === 0) {
                container.innerHTML = `
                    <div class="text-center text-slate-400 py-8">
                        <p class="text-sm">Belum ada produk favorit di wishlist.</p>
                    </div>
                `;
                return;
            }

            const wishlistProducts = productsData.filter(p => wishlist.includes(p.id));
            container.innerHTML = wishlistProducts.map(item => `
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div class="flex items-center gap-3">
                        <img src="${item.image}" class="w-12 h-12 rounded-xl object-cover" alt="">
                        <div>
                            <h4 class="font-bold text-slate-900 text-sm">${item.name}</h4>
                            <span class="text-xs text-brand-600 font-bold">${formatRupiah(item.price)}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="addToCart(${item.id})" class="px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold">
                            + Cart
                        </button>
                        <button onclick="toggleWishlist(${item.id})" class="text-slate-400 hover:text-rose-500 p-2">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function toggleWishlistModal() {
            const modal = document.getElementById('wishlist-modal');
            modal.classList.toggle('hidden');
            modal.classList.toggle('flex');
        }

        // -------------------------------------------------------------
        // 9. QUICK VIEW MODAL
        // -------------------------------------------------------------
        function openQuickView(productId) {
            const p = productsData.find(item => item.id === productId);
            if (!p) return;

            document.getElementById('qv-image').src = p.image;
            document.getElementById('qv-category').textContent = p.category;
            document.getElementById('qv-rating').textContent = p.rating;
            document.getElementById('qv-title').textContent = p.name;
            document.getElementById('qv-price').textContent = formatRupiah(p.price);
            document.getElementById('qv-description').textContent = p.desc;

            const addBtn = document.getElementById('qv-add-btn');
            addBtn.onclick = function() {
                addToCart(p.id);
                closeQuickView();
            };

            const modal = document.getElementById('quickview-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeQuickView() {
            const modal = document.getElementById('quickview-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // -------------------------------------------------------------
        // 10. TOAST NOTIFICATION & UTILS
        // -------------------------------------------------------------
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            toast.className = `bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto`;
            toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i> <span>${message}</span>`;
            
            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function toggleMobileSidebar() {
            const sidebar = document.getElementById('mobile-sidebar');
            const panel = document.getElementById('mobile-sidebar-panel');
            
            if (sidebar.classList.contains('pointer-events-none')) {
                sidebar.classList.remove('pointer-events-none', 'opacity-0');
                panel.classList.remove('-translate-x-full');
            } else {
                sidebar.classList.add('opacity-0', 'pointer-events-none');
                panel.classList.add('-translate-x-full');
            }
        }

        // Carousel Slider
        let currentSlide = 0;
        function startCarousel() {
            setInterval(() => {
                currentSlide = (currentSlide + 1) % 2;
                setSlide(currentSlide);
            }, 5000);
        }

        function setSlide(index) {
            currentSlide = index;
            const slides = document.getElementById('carousel-slides');
            slides.style.transform = `translateX(-${index * 100}%)`;
            
            const dots = document.querySelectorAll('.carousel-dot');
            dots.forEach((dot, idx) => {
                if (idx === index) {
                    dot.classList.add('opacity-100', 'w-6');
                    dot.classList.remove('opacity-50', 'w-3');
                } else {
                    dot.classList.remove('opacity-100', 'w-6');
                    dot.classList.add('opacity-50', 'w-3');
                }
            });
        }