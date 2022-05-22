import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Purchase from './components/PurchasePage/Purchase';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
