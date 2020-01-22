import React from 'react';
import io from 'socket.io-client';

const API_ENDPOINT = 'http://localhost:3005';

const useJoinOrCreate = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const joinGame = (playerName, lobbyCode) => {
    console.log(playerName, lobbyCode);
  };

  const createGame = async (playerName) => {
    return new Promise((resolve, reject) => {
      try {
        setError(null);
        setLoading(true);

        const socket = io(API_ENDPOINT);
        socket.emit('CREATE_GAME', playerName)

        setTimeout(() => {
          resolve();
          setLoading(false);
        }, 3000)

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