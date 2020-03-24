const admin = require('firebase-admin');
const { v4 } = require('uuid')
const { getRandomLobbyCode } = require('./utils');

const getLobbySnapshotByCode = async (db, lobbyCode) => {
  const lobbiesRef = db.collection("lobby");

  const lobbies = lobbiesRef.where('code', '==', lobbyCode);
  const snapshot = await lobbies.get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }

  // Todo make sure this is actually the right lobby otherwise
  // weird things will start happening in the future.
  const lobbySnapshot = snapshot.docs && snapshot.docs.length > 0 && snapshot.docs[0];
  return lobbySnapshot;
};

const getLobbyByCode = async (db, lobbyCode) => {
  console.log(`getLobbyByCode ${lobbyCode}`);
  
  const lobbySnapshot = await getLobbySnapshotByCode(db, lobbyCode);
  const lobby = lobbySnapshot.data();
  return lobby;
};


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
};


const joinLobby = async (db, playerName, lobbyCode) => {
  const lobbySnapshot = await getLobbySnapshotByCode(db, lobbyCode);
  const lobbyId = lobbySnapshot.id;

  const lobbyRef = db.collection('lobby').doc(lobbyId);

  // Atomically add a new region to the "regions" array field.
  const lobby = lobbyRef.update({
    players: admin.firestore.FieldValue.arrayUnion(playerName)
  });

  return {
    id: lobbyId,
    ...lobby,
  }
};

module.exports = {
  createLobby,
  joinLobby,
  getLobbyByCode,
};