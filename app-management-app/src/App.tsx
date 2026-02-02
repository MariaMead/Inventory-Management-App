import { useState } from "react";

import './App.css'
import type { InventoryItem } from "./Inventory/inventoryData";
import { dataInventory } from './Inventory/inventoryData';
import "./components/inventorySearch/inventorySearch.css"
import InventorySearch from './components/inventorySearch/inventorySearch';
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';
import { Route, Routes } from 'react-router';
import Layout from './common/Layout';

function App() {
  //initializes state with imported data
  // This is top level to be used in any child components
  const [ inventory, setInventoryList ] = useState<InventoryItem[]>(dataInventory);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/low-stock-alerts" element={<LowStockAlerts
                                                   inventory={inventory}
                                                   setInventoryList={setInventoryList}/>} />
        <Route path="/inventory-search" element={<InventorySearch
                                                   inventory={inventory}
                                                   setInventoryList={setInventoryList}/>} />
      </Route>
    </Routes>
  );
};

export default App;
