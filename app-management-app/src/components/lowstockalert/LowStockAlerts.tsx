import "./lowStockAlert.css"
import type { InventoryItem } from "../../Inventory/inventoryData";



function LowStockAlerts({
  inventory,
  setInventoryList: _setInventoryList //This will need to be adjusted when you use the prop.
}: {
  inventory: InventoryItem[];
  setInventoryList: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
}) {
  const lowStockItems = inventory.filter(
    item => item.quantity <= item.lowStockThreshold
  );

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
                {lowStockItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.quantity === 0 ? "Out of Stock" : "Low Stock"}
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