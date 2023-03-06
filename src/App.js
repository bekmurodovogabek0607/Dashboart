import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/LoginPage/Login';
import { Routes, Route } from 'react-router-dom'
import { GlobalPrivader } from './utils/Context';
import { ProtectRoute } from './utils/ProtectRoute';
import { LoadingSpinner } from './Component/Spinner/loading';
import { Navbar } from './Component/Navbar/Navbar';
function App() {
  return (

    <>
      <GlobalPrivader>
        <Routes>
         
            <Route axact path='/' element={<ProtectRoute> <Navbar/> </ProtectRoute>} />
            <Route axact path='/login' element={<Login />} />

         

        </Routes>
        <LoadingSpinner/>
      </GlobalPrivader>



    </>

  );
}

export default App;
