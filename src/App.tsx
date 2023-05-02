import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ProductInfoScreen from './screens/ProductInfoScreen';
import AdminScreen from './screens/AdminScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/info' element={<ProductInfoScreen />} />
        <Route path='/admin' element={<AdminScreen />} />
        <Route path='/admin/orders' element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
