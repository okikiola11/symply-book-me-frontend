import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../HomePage/HomePage';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Lawyers from '../../containers/Lawyers/Lawyers';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/lawyers" component={Lawyers} />
    </Switch>
  </Router>
);

export default App;
