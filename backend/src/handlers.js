const { v4 } = require('uuid')
const { getRandomLobbyCode } = require('./utils');

const createLobby = (playerName) => {
  const code = getRandomLobbyCode();
  console.log(`${playerName} created a lobby with code: ${code}`);

  return {
    id: v4(),
    code,
    creationDateUnixMilli: new Date(),
  }
}

module.exports = {
  createLobby,
};