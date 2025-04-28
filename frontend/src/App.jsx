

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="inventory" element={<Inventory />} />
      </Route>
    </Routes>
  );
}

export default App;

