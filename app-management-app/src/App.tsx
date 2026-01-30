import './App.css'
import "./components/inventorySearch/inventorySearch.css"
import InventorySearch from './components/inventorySearch/inventorySearch';
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';
import { Route, Routes } from 'react-router';
import Layout from './common/Layout';

function App() {

  return (
    <Routes>
      <Route element={<Layout />} />
      <Route path="/low-stock-alerts" element={<LowStockAlerts />} />
      <Route path="/inventory-search" element={<InventorySearch />} />
    </Routes>
  );
};

export default App;
