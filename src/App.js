import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/mymovies">MyMovies</Link>
        <Link to="/adminPage">AdminPage</Link>
        <Link to="/register">LogIn/SignUp</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
