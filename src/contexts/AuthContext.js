import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
 const [userInfo, setUserInfo] = useState(null);
 const [loading, setLoading] = useState(true);
 const [loadingAuth, setLoadingAuth] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
 async function loadUserInfo(){
 const userStorageInfo = localStorage.getItem('userInfo');

 if(userStorageInfo){
 setUserInfo(JSON.parse(userStorageInfo));
 setLoading(false);
 }

 setLoading(false);
 }

 loadUserInfo();
 }, []);

 const signIn = () => {
 setLoadingAuth(true);
 try {
 const data = { user: 'user', password: '123' };

 setUserInfo(data);
 setLoadingAuth(false);
 localStorage.setItem('userInfo', JSON.stringify(data));
 navigate('/dashboard');
 } catch (error) {
 alert('Erro ao fazer login');
 setLoadingAuth(false);
 console.error(error);
 }
 }

 const logout = () => {
 setUserInfo(null);
 localStorage.removeItem('userInfo');
 navigate('/');
 }

 return(
 <AuthContext.Provider value={{ signed: !!userInfo, userInfo, loadingAuth, loading, signIn, logout }}>
 {children}
 </AuthContext.Provider>
 );
}

export default AuthProvider;
