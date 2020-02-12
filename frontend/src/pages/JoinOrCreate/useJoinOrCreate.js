import React from 'react';
import io from 'socket.io-client';

const API_ENDPOINT = 'http://localhost:3005';

const useJoinOrCreate = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const joinGame = (playerName, roomCode) => {
    console.log(playerName, roomCode);
    const roomSocket = io(`${API_ENDPOINT}/${roomCode}`);
  };

  const createGame = async (playerName) => {
    return new Promise((resolve, reject) => {
      try {
        setError(null);
        setLoading(true);

        const socket = io(API_ENDPOINT);
        socket.emit('CREATE_GAME', playerName)

        socket.on('GAME_CREATED', (roomCode) => {
          const roomSocket = io(`${API_ENDPOINT}/${roomCode}`);
          resolve(roomCode);
        });
      } catch (err) {
        console.log(err)
      }
      
    })
  };

  return {
    joinGame,
    createGame,
    isLoading,
    error,
  }
};

export default useJoinOrCreate;