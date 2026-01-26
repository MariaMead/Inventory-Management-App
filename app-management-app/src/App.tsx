import { useState } from "react";

import './App.css'
import type { InventoryItem } from "./Inventory/inventoryData";
import { dataInventory } from './Inventory/inventoryData';
import "./components/inventorySearch/inventorySearch.css"
import InventorySearch from './components/inventorySearch/inventorySearch';
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';

function App() {
  //initializes state with imported data
  // This is top level to be used in any child components
  const [ inventory, setInventoryList ] = useState<InventoryItem[]>(dataInventory);

  return (
    <>
      {/*Inventory Search component */}
      <InventorySearch inventory={inventory}/>
      
      <LowStockAlerts inventory={inventory}/>
    </>
  );
};

export default App;
