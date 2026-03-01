import './App.css'
import "./components/inventorySearch/inventorySearch.css"
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';
import InventorySearch from "./components/inventorySearch/inventorySearch";
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import ProfilePage from './components/profilePage/profilePage';
import NavInterface from './components/navInterface/navInterface';

function App() {
  // State removed

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<NavInterface />} />
        <Route path="/low-stock-alerts" element={<LowStockAlerts />} />
        <Route path="/inventory-search" element={<InventorySearch />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>

  );
};

export default App;
