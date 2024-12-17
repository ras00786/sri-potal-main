import React, { useEffect, useMemo } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearStoreData } from '../utils/dataFecther';
import { IsEmptyObject } from '../utils/helper';
import { checkValidToken } from '../utils/oidc-providers';

const PrivateRoute = () => {
  // Memoize userAuth to prevent re-initialization on every render
  const userAuth = useMemo(() => {
    const storedAuth = localStorage.getItem('userData');
    return storedAuth ? JSON.parse(storedAuth) : {};
  }, []);

  const isValidToken = checkValidToken(userAuth.data?.token);
  debugger
  useEffect(() => {
    if (!isValidToken) {
      if (!IsEmptyObject(userAuth)) {
        toast.warn('Session timed out');
      }
      clearStoreData();
    }
  }, [isValidToken, userAuth]);

  return isValidToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
