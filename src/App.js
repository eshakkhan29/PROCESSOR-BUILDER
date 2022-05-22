import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login';
import Purchase from './components/PurchasePage/Purchase';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Login/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
