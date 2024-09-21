import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './profile';

const customRoutes = [
  <Route
    key="profile"
    path="/profile"
    element={<Profile />}
  />
];

export default customRoutes;