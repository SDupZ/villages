const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'

const getRandomLobbyCode = () => {
  const roomCodeLength = 6;
  let roomCode = '';

  for (let i = 0; i < roomCodeLength; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    roomCode = roomCode.concat(alphabet[randomIndex]);
  }

  return roomCode;
}

module.exports = {
  getRandomLobbyCode,
};