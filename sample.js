         // -------------------------------------------------------------
        // 1. DATA PRODUCTS (50 Items with rich details & Unsplash URLs)
        // -------------------------------------------------------------
        const productsData = [
            { id: 1, name: "Smartphone Flagship Pro Max 256GB", category: "Elektronik", price: 18499000, rating: 4.9, desc: "Smartphone super cepat dengan kamera 108MP, layar AMOLED 120Hz, dan baterai tahan lama.", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" },
            { id: 2, name: "Wireless Noise Cancelling Headphones", category: "Elektronik", price: 3499000, rating: 4.8, desc: "Suara bass mendalam, kedap suara tingkat tinggi, dan daya tahan baterai hingga 30 jam.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
            { id: 3, name: "Smartwatch Sport Fitness Tracker", category: "Elektronik", price: 1299000, rating: 4.6, desc: "Pantau detak jantung, kadar oksigen, dan aktivitas olahraga secara presisi setiap hari.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
            { id: 4, name: "Laptop Ultra-Slim Intel i7 16GB RAM", category: "Elektronik", price: 15200000, rating: 4.9, desc: "Desain sangat tipis dan ringan, ideal untuk produktivitas tinggi, desain, dan multitasking.", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80" },
            { id: 5, name: "Kamera Mirrorless 4K Vlogging Kit", category: "Elektronik", price: 9800000, rating: 4.7, desc: "Kamera compact beresolusi tinggi dengan kemampuan merekam video 4K jernih.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
            { id: 6, name: "Speaker Bluetooth Portable Waterproof", category: "Elektronik", price: 799000, rating: 4.5, desc: "Suara lantang dengan pertahanan air IPX7, siap menemani petualangan outdoor kamu.", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80" },
            { id: 7, name: "Keyboard Mekanikal RGB Gaming Switch Red", category: "Elektronik", price: 650000, rating: 4.6, desc: "Respon ketikan cepat, pencahayaan RGB bisa kustomisasi, tombol empuk tahan lama.", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80" },
            { id: 8, name: "Mouse Gaming Ergonomis 16000 DPI", category: "Elektronik", price: 420000, rating: 4.4, desc: "Akurasi tinggi untuk gamer profesional dengan grip nyaman digunakan berjam-jam.", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80" },
            { id: 9, name: "Jaket Denim Vintage Unisex Premium", category: "Pakaian", price: 389000, rating: 4.7, desc: "Bahan denim berkualitas tinggi tebal namun nyaman dipakai di segala suasana.", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80" },
            { id: 10, name: "Kaos Polos Cotton Combed 30s Pack", category: "Pakaian", price: 145000, rating: 4.5, desc: "Bahan adem, menyerap keringat dengan baik, halus dan cocok untuk pemakaian sehari-hari.", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
            { id: 11, name: "Kemeja Flannel Tartan Casual Slimfit", category: "Pakaian", price: 210000, rating: 4.6, desc: "Motif kotak-kotak klasik dengan potongan modern slimfit yang trendy.", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80" },
            { id: 12, name: "Hoodie Oversize Minimalis Streetwear", category: "Pakaian", price: 275000, rating: 4.8, desc: "Bahan fleece tebal berserat lembut, hangat dan bergaya kasual kontemporer.", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
            { id: 13, name: "Celana Chino Slim Fit Stretch Casual", category: "Pakaian", price: 235000, rating: 4.4, desc: "Bahan katun stretch lentur yang memudahkan pergerakan aktif sepanjang hari.", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80" },
            { id: 14, name: "Gaun Casual Summer Floral Dress", category: "Pakaian", price: 310000, rating: 4.7, desc: "Gaun elegan bahan ringan beratap motif bunga yang cantik untuk acara santai.", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80" },
            { id: 15, name: "Sneakers Running Ultra Lightweight", category: "Sepatu", price: 699000, rating: 4.9, desc: "Sepatu lari super ringan dengan bantalan empuk meredam benturan kaki.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
            { id: 16, name: "Sepatu Casual Canvas Low Classic", category: "Sepatu", price: 320000, rating: 4.5, desc: "Desain ikonis sepanjang masa cocok dikombinasikan dengan celana jeans atau shorts.", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80" },
            { id: 17, name: "Sepatu Pantofel Kulit Asli Formal", category: "Sepatu", price: 780000, rating: 4.8, desc: "Dibuat dari kulit sapi asli premium, tampak mewah dan elegan untuk acara formal/kantor.", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80" },
            { id: 18, name: "Sepatu Boot Outdoor Hiking Waterproof", category: "Sepatu", price: 890000, rating: 4.7, desc: "Sol grip kuat anti selip dengan bahan waterproof yang kokoh untuk medan berat.", image: "https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=600&q=80" },
            { id: 19, name: "Sandal Slide Kasual Sponge Premium", category: "Sepatu", price: 120000, rating: 4.3, desc: "Sandal santai empuk dan tahan air, sangat nyaman dipakai di dalam rumah maupun santai.", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=80" },
            { id: 20, name: "Jam Tangan Analog Chronograph Kulit", category: "Aksesoris", price: 1250000, rating: 4.8, desc: "Tampilan maskulin dengan fitur chronograph presisi dan strap kulit asli bermutu tinggi.", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80" },
            { id: 21, name: "Kacamata Hitam Polarized UV400 Protection", category: "Aksesoris", price: 185000, rating: 4.6, desc: "Melindungi mata secara optimal dari paparan sinar UV matahari saat berkendara.", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" },
            { id: 22, name: "Tas Ransel Laptop Waterproof Minimalis", category: "Aksesoris", price: 345000, rating: 4.7, desc: "Kompartemen luas dilengkapi slot khusus laptop 15.6 inch dan port USB charger.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" },
            { id: 23, name: "Dompet Kulit Pria Lipat RFID Blocker", category: "Aksesoris", price: 199000, rating: 4.5, desc: "Aman dari kejahatan pemindaian kartu RFID, desain ramping dengan banyak selot kartu.", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80" },
            { id: 24, name: "Topi Baseball Adjustable Canvas Unisex", category: "Aksesoris", price: 85000, rating: 4.4, desc: "Pilihan bergaya kasual dengan lingkaran kepala yang mudah disesuaikan.", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" },
            { id: 25, name: "Air Fryer Digital Low Watt 4 Liter", category: "Rumah Tangga", price: 899000, rating: 4.8, desc: "Menggoreng tanpa minyak, sehat, praktis dengan pengaturan layar sentuh digital.", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80" },
            { id: 26, name: "Mesin Kopi Espresso Manual Barista", category: "Rumah Tangga", price: 2100000, rating: 4.9, desc: "Nikmati kreasi espresso, cappuccino, dan latte ala kafe di rumah Anda.", image: "https://images.unsplash.com/photo-1517668808822-9a428a206a4a?auto=format&fit=crop&w=600&q=80" },
            { id: 27, name: "Lampu Meja Belajar LED Smart Touch", category: "Rumah Tangga", price: 165000, rating: 4.5, desc: "Tingkat kecerahan dapat diatur, aman untuk mata, serta fleksibel diputar 360 derajat.", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=600&q=80" },
            { id: 28, name: "Robot Vacuum Cleaner Smart Mapping", category: "Rumah Tangga", price: 3400000, rating: 4.7, desc: "Pembersih otomatis yang menyapu dan mengepel lantai dengan sensor navigasi pintar.", image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80" },
            { id: 29, name: "Set Pisau Dapur Stainless Steel 6 In 1", category: "Rumah Tangga", price: 240000, rating: 4.6, desc: "Pisau tajam tahan karat lengkap dengan gunting dan papan potong berkualitas.", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=600&q=80" },
            { id: 30, name: "Cangkir Keramik Aesthetic Handle Emas", category: "Rumah Tangga", price: 75000, rating: 4.4, desc: "Gaya kekinian untuk menikmati minum teh atau kopi hangat di pagi hari.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" },
            { id: 31, name: "Tablet Drawing Grafis Digital Pen", category: "Elektronik", price: 1100000, rating: 4.6, desc: "Sensivitas tekanan tinggi untuk desainer, ilustrator, dan animator kreatif.", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80" },
            { id: 32, name: "Powerbank Quick Charge 20000mAh", category: "Elektronik", price: 299000, rating: 4.7, desc: "Pengisian daya super cepat ganda dengan proteksi arus pendek terintegrasi.", image: "https://images.unsplash.com/photo-1609592424009-548777085732?auto=format&fit=crop&w=600&q=80" },
            { id: 33, name: "Celana Jeans Slim Fit Denim Wash", category: "Pakaian", price: 330000, rating: 4.6, desc: "Potongan pas di kaki, elastis ringan, warna tidak gampang pudar saat dicuci.", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80" },
            { id: 34, name: "Sweater Rajut Premium Warm Oversize", category: "Pakaian", price: 215000, rating: 4.5, desc: "Benang rajut lembut tidak bikin gatal, sangat hangat untuk udara dingin.", image: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?auto=format&fit=crop&w=600&q=80" },
            { id: 35, name: "Sepatu Slip On Casual Loafers", category: "Sepatu", price: 280000, rating: 4.3, desc: "Mudah dipakai tanpa tali, sangat nyaman digunakan saat bepergian santai.", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=600&q=80" },
            { id: 36, name: "Sabuk Kulit Pria Pin Buckle Classic", category: "Aksesoris", price: 135000, rating: 4.5, desc: "Ikat pinggang kulit sintetis premium dengan sabuk perak antik anti karat.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" },
            { id: 37, name: "Teko Listrik Pemanas Air Stainless", category: "Rumah Tangga", price: 180000, rating: 4.6, desc: "Mendidihkan air dalamhitungan menit, hemat daya dan otomatis mati saat mendidih.", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=600&q=80" },
            { id: 38, name: "Humidifier Aroma Diffuser RGB Light", category: "Rumah Tangga", price: 145000, rating: 4.7, desc: "Menjaga kelembapan udara ruangan sekaligus memberikan efek terapi aroma menyegarkan.", image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80" },
            { id: 39, name: "Smart TV 4K Ultra HD 43 Inch", category: "Elektronik", price: 4299000, rating: 4.8, desc: "Tampilan gambar sangat jernih dengan fitur Google Assistant dan aplikasi streaming bawaan.", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80" },
            { id: 40, name: "Earphones TWS Wireless Bass Boost", category: "Elektronik", price: 350000, rating: 4.5, desc: "Koneksi Bluetooth 5.3 stabil tanpa delay, sangat cocok untuk mendengarkan musik.", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80" },
            { id: 41, name: "Kemeja Batik Modern Prabu Slimfit", category: "Pakaian", price: 260000, rating: 4.9, desc: "Motif batik khas nusantara bergaya modern yang cocok untuk acara formal dan kerja.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
            { id: 42, name: "Sepatu Olahraga Basket High Top", category: "Sepatu", price: 850000, rating: 4.7, desc: "Perlindungan engkel tinggi dan sol berbahan karet anti licin di lapangan.", image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=600&q=80" },
            { id: 43, name: "Kalung Perak Sterling Silver Pendant", category: "Aksesoris", price: 295000, rating: 4.6, desc: "Liontin berkilau indah, tahan karat dan hipoalergenik untuk kulit sensitif.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
            { id: 44, name: "Blender Juicer Portable USB Rechargeable", category: "Rumah Tangga", price: 175000, rating: 4.4, desc: "Bikin jus buah segar di mana saja secara praktis hanya dengan menekan satu tombol.", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80" },
            { id: 45, name: "Microphone Condenser USB Podcast Kit", category: "Elektronik", price: 540000, rating: 4.7, desc: "Suara jernih bening bebas noise, pas untuk kebutuhan streaming, podcast, dan recording.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80" },
            { id: 46, name: "Celana Pendek Chino Casual Summer", category: "Pakaian", price: 130000, rating: 4.3, desc: "Celana pendek harian santai dengan kantong fungsional di kedua sisi.", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80" },
            { id: 47, name: "Sandal Gunung Outdoor Heavy Duty", category: "Sepatu", price: 210000, rating: 4.8, desc: "Tali strap nylon kuat dengan sol berbahan spons empuk dan bergerigi.", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=80" },
            { id: 48, name: "Topi Beanie Rajut Wool Winter", category: "Aksesoris", price: 65000, rating: 4.5, desc: "Topi kupluk hangat gaya streetwear untuk melindungi kepala dari suhu dingin.", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80" },
            { id: 49, name: "Pembersih Udara Air Purifier HEPA Filter", category: "Rumah Tangga", price: 1650000, rating: 4.9, desc: "Menyaring 99.97% debu halus, alergen, dan bakteri udara demi kesehatan keluarga.", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80" },
            { id: 50, name: "Set Bantal & Guling Memory Foam", category: "Rumah Tangga", price: 320000, rating: 4.8, desc: "Menopang leher dan tulang belakang secara sempurna untuk kualitas tidur nyenyak.", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80" }
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