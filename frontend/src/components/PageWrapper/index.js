import React from 'react';
import * as Styled from './PageWrapper.styled';

export default function PageWrapper(props) {
  return (
    <Styled.Wrapper>
      {props.children}
    </Styled.Wrapper>
  )
}