import React from 'react';
import GlobalStyle from 'globalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from 'views/Landing';

function App() {
  return (
    <ThemeProvider theme={{
      palette: {
        black: '#000000',
        white: '#ffffff',
        gray: '#999999',
        primary: '#D1ED5D',
        secondary: '#B2FF75',
      }
    }}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
