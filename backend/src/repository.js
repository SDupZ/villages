const admin = require('firebase-admin');
const { getRandomLobbyId } = require('./utils');


const getLobby = async (db, id) => {
  console.log(`getLobby ${id}`);

  const lobbyRef = db.collection("lobby").doc(id);
  const lobbyDoc = await lobbyRef.get();

  if (!lobbyDoc.exists) {
    throw new Error("No such document!")
  }

  return {
    id,
    ...lobbyDoc.data(),
  };
};


const createLobby = async (db, playerName) => {
  const id = getRandomLobbyId();
  // TODO retry getRandomcode if it already exists here
  const creationDateUnixMilli = new Date();

  const newLobby = {
    hostPlayerName: playerName,
    players: [playerName],
    creationDateUnixMilli,
  }

  // Create lobby
  let newLobbyRef = db.collection('lobby').doc(id);
  await newLobbyRef.set(newLobby);

  console.log(`Lobby created (${id}) by ${playerName}`);
  return {
    id,
    ...newLobby,
  }
};


const joinLobby = async (db, id, playerName) => {
  const lobbyRef = db.collection('lobby').doc(id);

  // Atomically add a new region to the "regions" array field.
  const lobby = await lobbyRef.update({
    players: admin.firestore.FieldValue.arrayUnion(playerName)
  });

  return {
    id,
    ...lobby,
  }
};

module.exports = {
  getLobby,
  joinLobby,
  createLobby,
};