
import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './profile';

const customRoutes = [
  <Route path="/profile" element={<Profile />} key="profile" />
];

export default customRoutes;