// import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route  path='/login'>
          <Login/>
        </Route>

        <Route  path='/signUp'>
          <SignUp/>
        </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
