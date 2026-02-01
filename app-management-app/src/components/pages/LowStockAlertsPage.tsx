import type React from "react";
import type { InventoryItem } from "../../Inventory/inventoryData";
import LowStockAlerts from "../lowstockalert/LowStockAlerts";

export default function LowStockPage({
  inventory,
  setInventoryList
}: {
  inventory: InventoryItem[];
  setInventoryList: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
}) {
  return (
    <LowStockAlerts
      inventory={inventory}
      setInventoryList={setInventoryList}
    />
  );
}
