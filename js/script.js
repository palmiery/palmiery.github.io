    /* Arquivo JavaScript: js/script.js */
    document.addEventListener('DOMContentLoaded', () => {
        const logo = document.querySelector('.logo');

        // Adiciona animação na logo
        logo.style.transition = 'transform 1s';
        setTimeout(() => {
            logo.style.transform = 'translateX(10px)';
        }, 1000);

        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'translateX(50px)';
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateX(10px)';
        });
    });


// Menu

// Código JavaScript (js/script.js)
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const submenu = item.querySelector('.submenu');
            submenu.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            const submenu = item.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});

/* slide de anuncios */
let currentIndex = 0;

// Função para mover o slide
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides; // Garante a navegação circular

    // Move o carousel para o slide correto
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza os indicadores
    updateIndicators();
}

// Função para atualizar os indicadores de bolinhas
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Adiciona a funcionalidade de clicar nas bolinhas para mudar de slide
function setupIndicatorClicks() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index; // Atualiza o índice para o da bolinha clicada
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Move o slide para o índice correto

            // Atualiza os indicadores
            updateIndicators();
        });
    });
}

// Chama a função para adicionar os eventos de clique nas bolinhas
setupIndicatorClicks();


// Inicializa o primeiro indicador como ativo
updateIndicators();

// Navegação automática a cada 3 segundos (3000ms)
setInterval(() => {
    moveSlide(1); // Avança para o próximo slide
}, 3000);



//botao logout

function confirmLogout() {
    // Pergunta se o usuário tem certeza
    var confirmAction = confirm("Tem certeza que deseja sair?");
    if (confirmAction) {
        // Redireciona para a página inicial
        window.location.href = "index.html";
    }
}

//Mensagem para funcionalidades bloqeadas na pagina inicial
function showLoginMessage(event) {
    event.preventDefault();  // Impede a ação do link (navegação)

    // Exibe a mensagem de aviso
    var message = document.getElementById('login-message');
    message.style.display = 'block';

    // A mensagem de aviso desaparece após 5 segundos
    setTimeout(function() {
        message.style.display = 'none';
    }, 5000);
}

//pagina cadastrar empresa


// Função de validação do formulário
document.getElementById('form-cadastro-empresa').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value;
    const cnpj = document.getElementById('cnpj').value;
    const setor = document.getElementById('setor').value;
    const inscricaoEstadual = document.getElementById('inscricao-estadual').value;
    const descricao = document.getElementById('descricao').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const cep = document.getElementById('cep').value;
    const site = document.getElementById('site').value;

    // Simulação de exibição dos dados coletados
    console.log(`Empresa: ${nome}`);
    console.log(`CNPJ: ${cnpj}`);
    console.log(`Setor: ${setor}`);
    console.log(`Inscrição Estadual: ${inscricaoEstadual}`);
    console.log(`Descrição: ${descricao}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Cidade: ${cidade}`);
    console.log(`CEP: ${cep}`);
    console.log(`Site: ${site}`);

    // Exibindo uma mensagem de sucesso
    alert("Empresa cadastrada com sucesso!");

    // Redireciona para a página pos-login.html após o cadastro
    window.location.href = "pos-login.html";

    // Limpar o formulário (opcional, já que o redirecionamento acontece imediatamente)
    this.reset();
});

//pagina gerencia-empresas
document.addEventListener('DOMContentLoaded', function () {
    // Dados simulados das empresas cadastradas
    const empresas = [
        {
            nome: 'Empresa A',
            cnpj: '12.345.678/0001-90',
            setor: 'Tecnologia',
            inscricaoEstadual: '123456789',
            descricao: 'Empresa especializada em TI.',
            endereco: 'Rua A, 123',
            cidade: 'Cidade X',
            cep: '12345-678',
            site: 'https://www.empresa-a.com',
        },
        {
            nome: 'Empresa B',
            cnpj: '98.765.432/0001-01',
            setor: 'Educação',
            inscricaoEstadual: '987654321',
            descricao: 'Academia de cursos online.',
            endereco: 'Rua B, 456',
            cidade: 'Cidade Y',
            cep: '23456-789',
            site: 'https://www.empresa-b.com',
        },
        // Adicione outras empresas conforme necessário
    ];

    // Exibindo as empresas na tabela
    const empresaTableBody = document.querySelector('#empresaTable tbody');
    empresas.forEach((empresa, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${empresa.nome}</td>
            <td>${empresa.cnpj}</td>
            <td>${empresa.setor}</td>
            <td>${empresa.inscricaoEstadual}</td>
            <td>${empresa.descricao}</td>
            <td>${empresa.endereco}</td>
            <td>${empresa.cidade}</td>
            <td>${empresa.cep}</td>
            <td><a href="${empresa.site}" target="_blank">${empresa.site}</a></td>
            <td><button class="delete-btn" onclick="deleteEmpresa(${index})">Excluir</button></td>
        `;

        empresaTableBody.appendChild(row);
    });

    // Função para excluir uma empresa
    window.deleteEmpresa = function (index) {
        const confirmDelete = confirm('Tem certeza que deseja excluir esta empresa?');
        if (confirmDelete) {
            empresas.splice(index, 1); // Remove a empresa do array
            alert('Empresa excluída com sucesso!');
            location.reload(); // Recarrega a página para atualizar a tabela
        }
    };
});
document.addEventListener('DOMContentLoaded', function () {
    // Dados simulados das empresas cadastradas
    const empresas = [
        {
            nome: 'Empresa A',
            cnpj: '12.345.678/0001-90',
            setor: 'Tecnologia',
            inscricaoEstadual: '123456789',
            descricao: 'Empresa especializada em TI.',
            endereco: 'Rua A, 123',
            cidade: 'Cidade X',
            cep: '12345-678',
            site: 'https://www.empresa-a.com'
        },
        {
            nome: 'Empresa B',
            cnpj: '98.765.432/0001-01',
            setor: 'Educação',
            inscricaoEstadual: '987654321',
            descricao: 'Academia de cursos online.',
            endereco: 'Rua B, 456',
            cidade: 'Cidade Y',
            cep: '23456-789',
            site: 'https://www.empresa-b.com'
        },
        {
            nome: 'Empresa C',
            cnpj: '11.223.344/0001-00',
            setor: 'Saúde',
            inscricaoEstadual: '112233445',
            descricao: 'Clínica de atendimento médico.',
            endereco: 'Rua C, 789',
            cidade: 'Cidade Z',
            cep: '34567-890',
            site: 'https://www.empresa-c.com'
        }
        // Adicione outras empresas conforme necessário
    ];

    // Função para exibir os dados das empresas na tabela
    const empresaTableBody = document.querySelector('#empresaTable tbody');
    
    empresas.forEach((empresa, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${empresa.nome}</td>
            <td>${empresa.cnpj}</td>
            <td>${empresa.setor}</td>
            <td>${empresa.inscricaoEstadual}</td>
            <td>${empresa.descricao}</td>
            <td>${empresa.endereco}</td>
            <td>${empresa.cidade}</td>
            <td>${empresa.cep}</td>
            <td><a href="${empresa.site}" target="_blank">${empresa.site}</a></td>
            <td><button class="delete-btn" onclick="deleteEmpresa(${index})">Excluir</button></td>
        `;
        
        empresaTableBody.appendChild(row);
    });

    // Função para excluir uma empresa
    window.deleteEmpresa = function (index) {
        const confirmDelete = confirm('Tem certeza que deseja excluir esta empresa?');
        if (confirmDelete) {
            empresas.splice(index, 1); // Remove a empresa do array
            alert('Empresa excluída com sucesso!');
            location.reload(); // Recarrega a página para atualizar a tabela
        }
    };
});


