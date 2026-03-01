import { useState } from "react";
import './App.css'
import type { InventoryItem } from "./Inventory/inventoryData";
import { dataInventory } from './Inventory/inventoryData';
import "./components/inventorySearch/inventorySearch.css"
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';

import { Route, Routes } from 'react-router';
import Layout from './common/Layout';
import ProfilePage from './components/profilePage/profilePage';
import NavInterface from './components/navInterface/navInterface';
import { InventoryList } from "./components/pages/inventoryList";

function App() {
  //initializes state with imported data
  // This is top level to be used in any child components
  const [ inventory, setInventoryList ] = useState<InventoryItem[]>(dataInventory);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<NavInterface />} />
        <Route path="/low-stock-alerts" element={<LowStockAlerts
                                                   inventory={inventory}
                                                   setInventoryList={setInventoryList}/>} />
        <Route path="/inventory-search" element={<InventoryList />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>

  );
};

export default App;
