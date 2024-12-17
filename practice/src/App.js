import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './page/Homepage';
import ServicesPage from './page/ServicesPage';
import Storepage from './page/Storepage';
import ProductPage from './page/ServicesPage';
import LoginPage from './page/LoginPage';
import AdminDashBoard from './page/adminDashBoard';

function App() {
  return (
    <>

      <Router>
        <Layout>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/store' element={<Storepage />} />
            <Route path='admin' element={<AdminDashBoard />} />
          </Routes>
        </Layout>

      </Router>




    </>
  );
}

export default App;
