// Armazenamento das listas de jogadores e partidas
let players = [];
let matches = [];

// Função para atualizar a lista de jogadores na interface
function updatePlayerList() {
    const playerList = document.getElementById('playerList').querySelector('ul');
    playerList.innerHTML = '';  // Limpar a lista atual

    players.forEach((player, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${player}`;
        playerList.appendChild(li);
    });
}

// Função para atualizar a lista de partidas agendadas na interface
function updateMatchSchedule() {
    const matchSchedule = document.getElementById('matchSchedule');
    matchSchedule.innerHTML = '';  // Limpar a lista atual

    matches.forEach(match => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>Partida:</strong> ${match.date} às ${match.time}`;
        matchSchedule.appendChild(div);
    });
}

// Adicionar jogador
document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value.trim();
    if (playerName) {
        players.push(playerName);
        updatePlayerList();
        document.getElementById('playerName').value = ''; // Limpar campo de entrada
    } else {
        alert('Por favor, insira um nome válido.');
    }
});

// Agendar partida
document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const matchDate = document.getElementById('matchDate').value;
    const matchTime = document.getElementById('matchTime').value;

    if (matchDate && matchTime) {
        const match = {
            date: matchDate,
            time: matchTime
        };

        matches.push(match);
        updateMatchSchedule();
        document.getElementById('matchDate').value = '';  // Limpar campo de entrada
        document.getElementById('matchTime').value = '';  // Limpar campo de entrada
    } else {
        alert('Por favor, preencha todos os campos para agendar a partida.');
    }
});
