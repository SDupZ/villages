const { getRandomRoomCode } = require('./utils');

const handleCreateGame = io => playerName => {
  const roomCode = getRandomRoomCode();
  console.log(`${playerName} created a game with room code: ${roomCode}`);

  const namespace = io.of(`/${roomCode}`);
  namespace.on('connection', (socket) => {
    console.log(`Connected to dynamic namespace... ${roomCode}`);
  });

  io.emit('GAME_CREATED', roomCode);
};


module.exports = {
  handleCreateGame: handleCreateGame,
};