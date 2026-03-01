import "./lowStockAlert.css"
import { useState } from "react";
import type { InventoryItem } from "../../Inventory/inventoryData";
import { inventoryService } from "../../services/inventoryService";
import type React from "react";
import { inventoryRepository } from "../../repositories/inventoryRepository";



function QuantityEditor({
  value,
  onChange
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
    />
  );
}


function LowStockAlerts() {
  const [inventory, setInventory] = useState<InventoryItem[]>(() => inventoryRepository.getAll());

  const lowStockItems = inventory.filter(
    item => item.quantity <= item.lowStockThreshold
  );

  const updateQuantity = (id: string, newQuantity: number) => {
    const item = inventoryRepository.getById(id);
    if (item) {
      inventoryRepository.update(id, { ...item, quantity: newQuantity });
      setInventory(inventoryRepository.getAll());
    }
  };

  const removeItem = (id: string) => {
    inventoryRepository.delete(id);
    setInventory(inventoryRepository.getAll());
  };

    return (
        <section className="low-stock-alerts">
          <h2>Low stock Alert</h2>

          {lowStockItems.length === 0? (
            <p>All items are sufficiently stocked</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="low-stock-body">
                {lowStockItems.map((item: InventoryItem) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                  
                    <td>
                      <QuantityEditor
                        value={item.quantity}
                        onChange={newQuantity => updateQuantity(item.id, newQuantity)}
                      />
                    </td>
                    <td>
                      {item.quantity === 0 ? "Out of Stock" : "Low Stock"}
                    </td>

                    <td>
                      <button onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
    );

  }

export default LowStockAlerts;