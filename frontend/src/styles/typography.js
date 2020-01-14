import styled from 'styled-components';
import screenSize from 'styles/mediaQueries';
import colours from './colours';

export const StyledHeading = styled.h1`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.25;

  ${screenSize.minTablet`
    font-size: 3.6rem;
    line-height: 1.22;
  `}
`;

export const StyledHeadingTwo = styled.h2`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.25;

  ${screenSize.minTablet`
    font-size: 3rem;
    line-height: 1.2;
  `}
`;

export const StyledHeadingThree = styled.h3`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.44;

  ${screenSize.minTablet`
    font-size: 2.4rem;
    line-height: 1.25;
  `}
`;

export const StyledSubHeading = styled.h5`
  color: ${colours.navy};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.38;

  ${screenSize.minTablet`
    font-size: 1.8rem;
    line-height: 1.44;
  `}
`;

export const StyledParagraph = styled.p`
  color: ${colours.stone};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.57;

  ${screenSize.minTablet`
    font-size: 1.6rem;
    line-height: 1.38;
  `}
`;

export const StyledParagraphTwo = styled.p`
  color: ${colours.stone};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.17;

  ${screenSize.minTablet`
    font-size: 1.4rem;
    line-height: 1.57;
  `}
`;
