import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import SearchPage from './components/SearchPage';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/profile'>
            <Profile />
            <Chat />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
