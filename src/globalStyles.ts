import colors from './colors';

export default`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    color: ${colors.neutral[100]};
  }
`