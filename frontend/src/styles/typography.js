import styled from 'styled-components';
import screenSize from 'styles/mediaQueries';
import colours from 'constants/colors';

export const Hero = styled.h1`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.25;

  text-align: center;

  ${screenSize.minTablet`
    font-size: 3.6rem;
    line-height: 1.22;
  `}
`;

export const Heading = styled.h2`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.25;

  ${screenSize.minTablet`
    font-size: 3rem;
    line-height: 1.2;
  `}
`;

export const Subheading = styled.h3`
  color: ${colours.navy};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.44;

  ${screenSize.minTablet`
    font-size: 2.4rem;
    line-height: 1.25;
  `}
`;


export const Standard = styled.span`
  color: ${colours.stone};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.57;

  ${screenSize.minTablet`
    font-size: 1.6rem;
    line-height: 1.38;
  `}
`;

export const Small = styled.span`
  color: ${colours.stone};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.17;

  ${screenSize.minTablet`
    font-size: 1.4rem;
    line-height: 1.57;
  `}
`;
