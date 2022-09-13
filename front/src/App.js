import React, { lazy, Suspense } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import './App.css';
import FooterApp from "./components/footer/FooterApp";
import NavbarApp from "./components/navbar/NavbarApp";
import ProtectedRoute from "./services/ProtectedRoute";


const Home = lazy(()=>import('./views/home/Home'));
const Login = lazy(()=>import('./views/login/Login'));
const Housing = lazy(()=>import('./views/housing/Housing'));
const HousingDetails = lazy(()=>import('./views/housing-details/HousingDetails'));
const Admin = lazy(()=>import('./views/admin/Admin'));

const LoaderApp = (
  <div className="mx-auto text-center">
    <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
  </div>
)

function App() {

  const isLogged = true;

  return (
    <BrowserRouter>
      <NavbarApp/>
      <div className="app-content">
        <Suspense fallback={LoaderApp} >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/housing" element={<Housing/>} />
            <Route path="/housing-details" element={<HousingDetails/>} />

            <Route element={<ProtectedRoute isAllowed={isLogged} />}>
              <Route path="/admin" element={<Admin/>} />

            </Route>
          </Routes>
        </Suspense>
      </div>
      <FooterApp/>
    </BrowserRouter>
  );
}

export default App;
