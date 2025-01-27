let carrinho = [];
let total = 0;

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');

    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

// Filtros do menu
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const categoria = btn.getAttribute('data-categoria');
        filtrarMenu(categoria);
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

function filtrarMenu(categoria) {
    const itens = document.querySelectorAll('.item');
    itens.forEach(item => {
        if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Animação ao clicar nos links de navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});