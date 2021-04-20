import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from './containers/List';
import { createBrowserHistory } from 'history';

const App = () => {
  const history = createBrowserHistory();
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path='/' component={List} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
