import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />}></Route>
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route exact path='/register' element={<Register />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/profiles' element={<Profiles />}></Route>
              <Route exact path='/profile/:id' element={<Profile />}></Route>
              <Route
                exact
                path='/dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                exact
                path='/create-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                exact
                path='/edit-profile'
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                exact
                path='/add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                exact
                path='/add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                exact
                path='/posts'
                element={<PrivateRoute component={Posts} />}
              />
              <Route
                exact
                path='/posts/:id'
                element={<PrivateRoute component={Post} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
