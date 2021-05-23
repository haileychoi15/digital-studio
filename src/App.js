import React from 'react';
import GlobalStyle from 'globalStyle';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from 'views/Landing';
import Experiment1 from 'views/Experiment1';
import Experiment2 from 'views/Experiment2';

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/experiment1" component={Experiment1} />
          <Route exact path="/experiment2" component={Experiment2} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;