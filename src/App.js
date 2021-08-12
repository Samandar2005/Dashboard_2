import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboards from './pages/Dashbords';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact> <Redirect to="/dashboard/home" /> </Route>
          <Route path="/dashboard/:menu"> <Dashboards /> </Route>
        </Switch>
      </Provider>
    </Router>

  );
}

export default App;
