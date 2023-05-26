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
import { PropsWithChildren } from 'react';

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
          <Route path='/admin/*' element={<ProtectedRoute><AdminRoutes /></ProtectedRoute> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

function AdminRoutes() {
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

function ProtectedRoute(props: PropsWithChildren) {
  if (localStorage.getItem("authToken")) {
    return<>{props.children}</>
  } else {
    window.location.href = '/login'
    return <></>
  }
}

export default App;
