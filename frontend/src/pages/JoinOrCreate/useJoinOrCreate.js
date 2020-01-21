import React from 'react';

const useJoinOrCreate = () => {
    const [loading, setLoading] = React.useState(false);
    
    const joinGame = (playerName, lobbyCode) => {
        console.log(playerName, lobbyCode);
    };
    const createGame = (playerName) => {
        console.log(playerName);
    };

    return {
        joinGame,
        createGame,
    }
};

export default useJoinOrCreate;