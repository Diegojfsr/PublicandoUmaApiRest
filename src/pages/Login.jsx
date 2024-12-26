import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
 const [user, setUser] = useState('');
 const [password, setPassword] = useState('');

 const { signIn, loadingAuth } = useContext(AuthContext);

 const handleLogin = async (e) => {
 e.preventDefault();
 
 if(user !== '' && password !== ''){
 await signIn(user, password);
 }
 }

 return (
 <div style={{ margin: '30px' }}>
 <form onSubmit={handleLogin}>
 <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Login" /><br />
 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" /><br />
 <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
 </form>
 </div>
 );

}

export default Login;
