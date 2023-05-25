import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />}></Route>
      </Routes>
      <section className='container'>
        <Routes>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </section>
    </Fragment>
  </Router>
);

export default App;