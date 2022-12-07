import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home';
import UserLogin from './pages/Login/Signin';
import OwnerLogin from './pages/Login/OwnerLogin';
import Restaurants from './pages/Restaurants/Restaurants';
import Recipes from './pages/Recipes/Recipes';
import AddRestaurant from './pages/Restaurants/AddRestaurant';
import Dashboard from './pages/Dashboard/Dashboard';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/userlogin' element={<UserLogin />}></Route>
        <Route path='/ownerlogin' element={<OwnerLogin />}></Route>
        <Route path='/restaurants' element={<Restaurants />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/addrestaurant' element={<AddRestaurant />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/mainpage' element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
