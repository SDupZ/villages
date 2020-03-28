const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'

const getRandomLobbyId = () => {
  const lobbyIdLength = 6;
  let lobbyId = '';

  for (let i = 0; i < lobbyIdLength; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    lobbyId = lobbyId.concat(alphabet[randomIndex]);
  }

  return lobbyId;
}

module.exports = {
  getRandomLobbyId,
};