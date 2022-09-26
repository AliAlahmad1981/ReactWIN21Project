import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import About from './components/About/About';
import MoviesPage from './components/MoviesPage';
import Services from './components/Services/Services';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const logedUserState = localStorage.getItem('isLogged');

    if (logedUserState === 'yes') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLogged', 'yes');
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogged')
    setIsLoggedIn(false);

  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Switch>
        <Route path="/" exact>
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <MoviesPage onLogout={logoutHandler} />}
          </main>
        </Route>
        <Route path="/movies" exact>
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <MoviesPage onLogout={logoutHandler} />}
          </main>
        </Route>

        <Route path="/about">
          <About/>
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;
