import 'typeface-montserrat/index.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
*/
html, body {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Montserrat", sans-serif;
  vertical-align: baseline;
  height: 100%;
  font-size: 62.5%;
}

section {
  margin: 0;
  padding: 0;
}

/* Added to Fix Footer to bottom of viewport */
.siteRoot {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.siteContent {
  flex: 1;
}
footer {
  align-self: flex-end;
  width: 100%;
}

/* End Fix to Place Footer on Bottom of Viewport */

* {
  box-sizing: border-box;
}

body {
  background: white;
  line-height: 1;
  font-size: 100%;
  font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  font-weight: 400;
  word-wrap: break-word;
}
`;

export default GlobalStyle;
