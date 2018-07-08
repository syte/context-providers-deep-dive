import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {ThemeProvider} from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

import history from './utils/dynamic-history';
import theme from './styles/themes/base.styles';
import globalStyles from './styles/global.styles';

import App from './App';

globalStyles();
registerServiceWorker();

const render = async (Component: any) => {
  return ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Component history={history} />
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
  );
};

render(App);

if (module['hot']) {
  module['hot'].accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}