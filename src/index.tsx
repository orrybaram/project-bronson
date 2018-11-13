import * as React from 'react';
import { render } from 'react-dom';
import Home from './modules/Home';
import { injectGlobal } from 'emotion'

import globalStyles from './globalStyles';

injectGlobal(globalStyles);

const App = () => {
  return (
    <Home />
  );
};

render(<App />, document.getElementById('app'));
