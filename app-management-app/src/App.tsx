import './App.css'
import { useState } from 'react';
import { InventoryList } from './components/pages/inventoryList';
import "./components/inventorySearch/inventorySearch.css"
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';
import type { InventoryItem } from './components/inventorySearch/inventorySearch';
import { dataInventory } from './components/inventorySearch/inventorySearch';


function App() {
  const [inventory, setInventoryList ] = useState<InventoryItem[]>(dataInventory);

  return (
    <>
      {/*Inventory Search component */}
      <InventoryList
        inventory={inventory}
        setInventoryList={setInventoryList}
      />
      
      <LowStockAlerts />
    </>
  );
};

export default App;
