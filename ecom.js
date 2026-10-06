/*const names = [
    {id: 0, name: "SSD"},
    {id: 1, name: "RAM"},
    {id: 2, name: "SCB"}
];
const price = [
    {id: 0, price: 20}, 
    {id: 1, price: 40}, 
    {id: 2, price: 50}
];
const description = [ 
    {id: 0, desc: "Solid-state drive for your computer"}, 
    {id: 1, desc: "Random access memory for your computer"}, 
    {id: 2, desc: "Small computer board for electronic use"}
];
const imgsrc = [
    {id: 0, src: "ssd.jpg"}, 
    {id: 1, src: "ram.jpg"}, 
    {id: 2, src: "scb.jpg"}
]*/

const products = [
    {id: 0, name: "SSD", kategori: "Elektronik",
        price: 20000, desc: "Solid-state drive for your computer", src: "ssd.jpg"},
    {id: 1, name: "RAM", kategori: "Elektronik",
        price: 40000, desc: "Random access memory for your computer", src: "ssd.jpg"},
    {id: 2, name: "SCB", kategori: "Elektronik",
        price: 50000, desc: "Small computer board for electronic use", src: "ssd.jpg"},
    {id: 3, name: "Jaket Denim Vintage Unisex Premium", kategori: "Pakaian", 
        , price: 389000, desc: "Bahan denim berkualitas tinggi tebal namun nyaman dipakai di segala suasana.", 
        src: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
        }
]

/*var map = new Map();
map.set('name0', 'SSD');
map.set('price0', 20);
map.set('desc0', "Solid-state drive for your computer");
map.set('imgsrc0', "ssd.jpg");

map.set('name1', 'RAM');
map.set('price1', 40);
map.set('desc1', "Random access memory for your computer");
map.set('imgsrc1', "ram.jpg");

map.set('name2', 'SCB');
map.set('price2', 50);
map.set('desc2', "Small computer board for electronic use");
map.set('imgsrc2', "scb.jpg");*/

let string = "rows";
let string2 = "image";
let string3 = "title";
let string4 = "price";
let string5 = "description";
let azsort = false;
let high = 50;
let low = 20;
let tempval = 0;
let currentCategory = 'General';
let searchQuery = '';
let maxPriceFilter = 50000000;
let minRatingFilter = 0;
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 12;


function formatRupiah(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
        }


function renderCategories() {
            const categories = ['General', ...new Set(productsData.map(p => p.category))];
            
            const desktopContainer = document.getElementById('category-filters-container');
            const mobileContainer = document.getElementById('mobile-category-filters');

            const createCategoryHTML = (cat) => `
                <button onclick="filterCategory('${cat}')" class="category-btn w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${currentCategory === cat ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-100'}">
                    <span>${cat}</span>
                    <span class="text-xs text-slate-400 font-normal">(${cat === 'General' ? productsData.length : productsData.filter(p => p.category === cat).length})</span>
                </button>
            `;

            desktopContainer.innerHTML = categories.map(createCategoryHTML).join('');
            mobileContainer.innerHTML = categories.map(createCategoryHTML).join('');
}


function setupEventListeners() {
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

 function resetFilters() {
            currentCategory = 'General';
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

 function filterCategory(cat) {
            currentCategory = cat;
            renderCategories();
            currentPage = 1;
            applyFilters();
        }


function applyFilters() {
            let filtered = productsData.filter(product => {
                const matchesCategory = currentCategory === 'General' || product.category === currentCategory;
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

            if (currentCategory !== 'General') {
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



function checkSelected() {
    const dropdown = document.getElementById("sort");
    const selectedValue = dropdown.value;

    if (selectedValue == "price") {
        for (let i = 0; i < 3; i++) {
            let word5 ='price'
            if (map.get(word5.concat(i)) < high) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
                tempval = map.get(word5.concat(i))
            } else if (map.get(word5.concat(i)) < tempval) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
            }
        }
    } else if (selectedValue == "price2") {
       for (let i = 0; i < 3; i++) {
            let word5 ='price'
            if (map.get(word5.concat(i)) > low) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
                tempval = map.get(word5.concat(i))
            } else if (map.get(word5.concat(i)) > tempval) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
        let word1 = '<img  width="640px" height="350px" src="';
        let word2 = '">';
        let word3 ='imgsrc'
        let word4 ='name'
        let word5 ='price'
        let word6 ='desc'
        let htmlString = word1 + map.get(word3.concat(i)) + word2;
        document.getElementById(string.concat(i)).insertAdjacentHTML("afterbegin", htmlString);
        document.getElementById(string3.concat(i)).innerHTML = map.get(word4.concat(i));
        document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
        document.getElementById(string5.concat(i)).innerHTML = map.get(word6.concat(i));
    }


