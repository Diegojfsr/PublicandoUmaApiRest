
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function RouterApp(){
 return(
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute>} />
 </Routes>
 );
}

export default RouterApp;