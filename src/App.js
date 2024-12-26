
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './routes/routes.js';
import AuthProvider from './contexts/AuthContext.js';

export default function App() {
 return (
 <BrowserRouter>
 <AuthProvider>
 <RouterApp />
 </AuthProvider>
 </BrowserRouter>
 );
}