
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
 const { logout, userInfo } = useContext(AuthContext);

 const handleLogout = async () => {
 await logout();
 }

 return (
 <div style={{ margin: '30px' }}>
 <h1>Seja bem vindo ao Dashboard!</h1>
 <p>Nome: {userInfo.nome} </p>
 <p>Site: <a href="https://micilini.com">{userInfo.site}</a></p>
 <button onClick={handleLogout}>Sair</button>
 </div>
 );
}

export default Dashboard;