import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { checkValidToken } from '../utils/oidc-providers';
import { getLandingPage } from '../utils/helper';

const PublicRoute = () => {
  const userAuth = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') ?? '{}')
    : {};
  const isValidToken = checkValidToken(userAuth.token);
  const landingPage = getLandingPage(userAuth.roleName);

  return isValidToken ? <Navigate to={landingPage} /> : <Outlet />;
};

export default PublicRoute;
