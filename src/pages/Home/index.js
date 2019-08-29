import React from 'react';
import GameBoard from './components/GameBoard';

import * as Styled from './Home.styled';

export default function Home() {
  return (
    <Styled.Home>
      <GameBoard />
    </Styled.Home>
  );
}