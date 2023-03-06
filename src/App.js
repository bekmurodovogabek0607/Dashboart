import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/LoginPage/Login';
import { Routes, Route } from 'react-router-dom'
import { GlobalPrivader } from './utils/Context';
import { ProtectRoute } from './utils/ProtectRoute';
import { LoadingSpinner } from './Component/Spinner/loading';
import { Navbar } from './Component/Navbar/Navbar';
import { UserPage } from './Pages/UserPage/UserPage';
import { Product } from './Pages/Product/Product';
import { Categoriya } from './Pages/Categoriya/Categoriya';
import { Message } from './Pages/Message/Message';
import { Information } from './Pages/Information/Information';
function App() {
  return (

    <>
      <GlobalPrivader>
        <Routes>
         
            <Route axact path='/' element={<ProtectRoute> <UserPage/> </ProtectRoute>} />
            <Route axact path='/product' element={<ProtectRoute> <Product/> </ProtectRoute>} />
            <Route axact path='/catgory' element={<ProtectRoute> <Categoriya/> </ProtectRoute>} />
            <Route axact path='/message' element={<ProtectRoute> <Message/> </ProtectRoute>} />
            <Route axact path='/information' element={<ProtectRoute> <Information/> </ProtectRoute>} />

            <Route axact path='/login' element={<Login />} />

         

        </Routes>
        <LoadingSpinner/>
      </GlobalPrivader>



    </>

  );
}

export default App;
