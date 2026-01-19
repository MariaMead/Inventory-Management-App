import './App.css'
import "./components/inventorySearch/inventorySearch.css"
import InventorySearch from './components/inventorySearch/inventorySearch';
import "./components/lowstockalert/lowStockAlert.css"
import LowStockAlerts from './components/lowstockalert/LowStockAlerts';

function App() {

  return (
    <>
      {/*Inventory Search component */}
      <InventorySearch />
      
      <LowStockAlerts />
    </>
  );
};

export default App;
