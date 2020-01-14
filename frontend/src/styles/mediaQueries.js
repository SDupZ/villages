import { css } from 'styled-components';

export const MIN_TABLET = 768;
export const MIN_DESKTOP = 1025;
export const MIN_DESKTOP_LG = 1225;

const sizes = {
  minTablet: `@media screen and (min-width: ${MIN_TABLET}px)`,
  minDesktop: `@media screen and (min-width: ${MIN_DESKTOP}px)`,
  minLargeDesktop: `@media screen and (min-width: ${MIN_DESKTOP_LG}px)`,
};

// Snippet sourced from: https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
const screenSize = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    ${sizes[label]} {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default screenSize;
