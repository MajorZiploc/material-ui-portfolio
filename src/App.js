import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { ErrorBoundary } from 'react-error-boundary';

import './App.css';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
