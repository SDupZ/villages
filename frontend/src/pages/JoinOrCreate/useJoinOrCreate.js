import React from 'react';

const useJoinOrCreate = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const joinGame = (playerName, lobbyCode) => {
    console.log(playerName, lobbyCode);
  };

  const createGame = async (playerName) => {
    return new Promise((resolve, reject) => {
      setError(null);
      setLoading(true);
      setTimeout(() => {
        resolve();
        setLoading(false);
      }, 3000)
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