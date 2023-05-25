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
import AdminProductInfo from './screens/AdminProductSrceen';
import AdminHeader from './components/AdminHeader';


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
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

function AdminRoutes() {
  if (ProtectedRoute()) {
    return (
    <>
      <AdminHeader />
      <Routes>
        <Route path='/' element={<OrderScreen />} />
        <Route path='/sales' element={<AdminScreen />} />
        <Route path='/orders' element={<OrderScreen />} />
        <Route path='/productInfo' element={<AdminProductInfo />} />
      </Routes>
    </>
  );
  }
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
  
}

function ProtectedRoute() {
  let isAllowed: boolean = false
  if (localStorage.getItem("authToken")) {
    isAllowed = true;
  }
  return isAllowed
}

export default App;
