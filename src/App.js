import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import ManageInventory from './Component/ManageInventory/ManageInventory'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Footer from './Component/Footer/Footer';
import ManageItems from './Component/MangeItems/ManageItems';
import AddItems from './Component/AddItems/AddItems';
import MyItems from './Component/MyItems/MyItems';
import Blogs from './Component/Blogs/Blogs';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Inventory from './Component/Inventory/Inventory';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth><Inventory></Inventory></RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
