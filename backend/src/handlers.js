const { v4 } = require('uuid')
const { getRandomLobbyCode } = require('./utils');

const createLobby = async (db, playerName) => {
  const lobbyId = v4();
  const code = getRandomLobbyCode();
  const creationDateUnixMilli = new Date();

  const newLobby = {
    code,
    hostPlayerName: playerName,
    players: [playerName],
    creationDateUnixMilli,
  }

  // Create lobby
  let newLobbyRef = db.collection('lobby').doc(lobbyId);
  newLobbyRef.set(newLobby);

  console.log(`Lobby created (${lobbyId}) by ${playerName} with code: ${code}`);
  return {
    id: lobbyId,
    ...newLobby,
  }
}

module.exports = {
  createLobby,
};