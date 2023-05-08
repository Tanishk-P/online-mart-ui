import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ProductInfoScreen from './screens/ProductInfoScreen';
import AdminScreen from './screens/AdminScreen';
import OrderScreen from './screens/OrderScreen';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
