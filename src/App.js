import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyle } from './styles/globalStyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
import { Context } from './Context';

// import { Favs } from './pages/Favs';
// import { User } from './pages/User';

const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
