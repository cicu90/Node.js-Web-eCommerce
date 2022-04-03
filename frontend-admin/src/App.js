//Van todas las rutas
import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductsContextProvider from './contextProvider/ProductsContextProvider'


function App() {
  // const [token, setToken] = useState();

  // if(token) {
  //   return <LoginPage setToken={setToken}/>;
  // }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
      <ProductsContextProvider>
      <Routes>
        {/* <Route exact path="/" element={<PrivateRoute />}> */}
          <Route path="/" element={<Dashboard />}/>
        {/* </Route> */}
      <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
