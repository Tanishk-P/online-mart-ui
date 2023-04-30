import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ProductInfoScreen from './screens/ProductInfoScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<Register />} />
        <Route path='/info' element={<ProductInfoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
