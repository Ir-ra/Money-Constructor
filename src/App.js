import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useAuth } from './hooks/useAuth';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './App.css'

function App() {
  const { authIsReady, user } = useAuth()
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
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
