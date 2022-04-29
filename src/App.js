import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import Inventory from './Component/Inventory/Inventory'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Footer from './Component/Footer/Footer';
import ManageItems from './Component/MangeItems/ManageItems';
import AddItems from './Component/AddItems/AddItems';
import MyItems from './Component/MyItems/MyItems';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
