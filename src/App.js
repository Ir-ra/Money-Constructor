import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const { authIsReady, user } = useAuth();
 
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>

            <Route exact path='/'>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>

            <Route path='/login'>
              {user && <Redirect to='/' />}
              {!user && <Login />}
            </Route>

            <Route path='/signUp'>
              {user && <Redirect to='/' />}
              {!user && <SignUp />}
            </Route>

          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
