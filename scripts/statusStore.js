// Função para verificar se a loja está aberta
function isStoreOpen() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Horário de funcionamento da loja
    const openingHour = 9; // 19:00
    const closingHour = 22;  // 00:40 (meia-noite e 40)
    const closingMinute = 30;

    // Verifica se a loja está aberta entre 16:00 e 23:59
    if (currentHour >= openingHour && currentHour < 23) {
        return true; // Loja aberta
    }

    // Verifica se a loja está aberta entre 00:00 e 00:40 do dia seguinte
    if (currentHour === closingHour && currentMinute <= closingMinute) {
        return true; // Loja ainda aberta até 00:40
    }

    return false; // Loja fechada
}

// Atualiza o status da loja no DOM
function updateStoreStatus() {
    const statusElement = document.getElementById('status-text');
    const circleElement = document.getElementById('status-circle');

    if (isStoreOpen()) {
        statusElement.textContent = 'Aberto';
        circleElement.classList.remove('bg-red-600');
        circleElement.classList.add('bg-green-600');
    } else {
        statusElement.textContent = 'Fechado';
        circleElement.classList.remove('bg-green-600');
        circleElement.classList.add('bg-red-600');
    }
}

// Chama a função para atualizar o status ao carregar a página
document.addEventListener('DOMContentLoaded', updateStoreStatus);
