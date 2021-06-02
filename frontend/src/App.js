import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavTop from './components/NavTop';
import AllPictures from './components/AllPictures';
import AddNew from './components/AddNew';
import SignInPassport from './components/SignInPassport';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavTop />
      <div className='App'>
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/add_new'>
              <AddNew />
            </Route>
            <Route path='/all_plant'>
              <AllPictures />
            </Route>

            <Route path='/signinpassport'>
              <SignInPassport />
            </Route>

            <Route path='/signup'>
              <SignUp />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
