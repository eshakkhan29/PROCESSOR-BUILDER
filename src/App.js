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
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddAReview from './components/Dashboard/AddAReview';
import MyProfile from './components/Dashboard/MyProfile';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProduct from './components/Dashboard/ManageProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import Payment from './components/Dashboard/Payment';
import RequireAdmin from './components/RequireAdmin/RequareAdmin';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}
        ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addreview' element={<AddAReview></AddAReview>}></Route>
          <Route path='/dashboard/profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/manageallorders' element={
            <RequireAdmin>
              <ManageAllOrders></ManageAllOrders>
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='/dashboard/manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
