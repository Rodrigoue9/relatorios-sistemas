// toolsData agora é carregado dinamicamente do arquivo data.js gerado pelo Web Scraper.

// Elementos do DOM
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const filterTags = document.querySelectorAll('.filter-tag');
const resultsCount = document.getElementById('resultsCount');
const resultsTitle = document.getElementById('resultsTitle');
const noResults = document.getElementById('noResults');

// Estado atual
let currentFilter = 'all';
let currentSearch = '';

// Iniciar a aplicação
function init() {
    renderTools(toolsData);
    setupEventListeners();
}

// Renderizar os cards
function renderTools(tools) {
    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = '0 encontradas';
        return;
    }

    toolsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = `${tools.length} ${tools.length === 1 ? 'encontrada' : 'encontradas'}`;

    tools.forEach((tool, index) => {
        const delay = index * 0.05; // Cascading animation effect

        const tagsHtml = tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        const cardHtml = `
            <div class="tool-card" style="animation-delay: ${delay}s">
                <div class="card-header">
                    <div class="tool-icon ${tool.brandClass}">
                        <i class="fa-brands ${tool.icon}"></i>
                        ${!tool.icon.startsWith('fa-') ? `<i class="fa-solid ${tool.icon}"></i>` : ''}
                    </div>
                    <div class="tool-info">
                        <h3>${tool.name}</h3>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i> ${tool.rating} <span>(${tool.reviews})</span>
                        </div>
                    </div>
                </div>
                
                <p class="card-desc">${tool.desc}</p>
                
                <div class="card-tags">
                    ${tagsHtml}
                </div>
                
                <div class="card-footer">
                    <div class="price">
                        ${tool.price !== 'Grátis+' && tool.price !== 'Sob Consulta' && tool.price !== 'Variável' && tool.price !== 'Por Mensagem' ? tool.price + '<span> /mês</span>' : tool.price}
                    <a href="${tool.link}" target="_blank" class="visit-btn" style="text-decoration: none; display: flex; align-items: center; justify-content: center;">
                        Acessar Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        `;

        toolsGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Aplicar filtros e busca combinados
function filterAndSearch() {
    let filteredData = toolsData;

    // Filter by Category
    if (currentFilter !== 'all') {
        filteredData = filteredData.filter(tool => tool.categories.includes(currentFilter));

        // Update Title dynamically
        const categoryNames = {
            'allinone': 'Sistemas Completos (WhatsApp + CRM + Chat + Email)',
            'whatsapp': 'Ferramentas de WhatsApp',
            'crm': 'Sistemas de CRM',
            'chatbot': 'Plataformas de Chatbot',
            'email': 'E-mail Marketing'
        };
        resultsTitle.textContent = categoryNames[currentFilter];
    } else {
        resultsTitle.textContent = currentSearch ? 'Resultados da Busca' : 'Ferramentas em Destaque';
    }

    // Search Text
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredData = filteredData.filter(tool =>
            tool.name.toLowerCase().includes(searchLower) ||
            tool.desc.toLowerCase().includes(searchLower) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    renderTools(filteredData);

    // Manage Clear Button visibility
    if (currentSearch.length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
}

// Configurar ouvintes de eventos
function setupEventListeners() {
    // Search Input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        filterAndSearch();
    });

    // Clear Button
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        searchInput.focus();
        filterAndSearch();
    });

    // Category Tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            // Remove active class from all
            filterTags.forEach(t => t.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');

            // Set current filter
            currentFilter = e.target.dataset.filter;
            filterAndSearch();
        });
    });
}

// Fix missing FA icons
document.addEventListener('DOMContentLoaded', () => {
    // some icons might need specific prefixes
    init();
});
