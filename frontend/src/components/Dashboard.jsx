
import { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); 
      setUser(decodedToken);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user?.name}!</h2>
      <div style={{ marginBottom: "15px" }}>
        <Link to="inventory"><button style={{ marginRight: '10px' }}>Inventory</button></Link>
        <button onClick={handleLogout} style={{ marginLeft: '20px' }}>Logout</button>
      </div>

      <Outlet />
    </div>
  );
}

export default Dashboard;

