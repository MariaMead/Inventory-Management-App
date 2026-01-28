import "./lowStockAlert.css"
import type { InventoryItem } from "../../Inventory/inventoryData";
import { dataInventory } from '../../Inventory/inventoryData';

/**interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  lowStockThreshold: number;
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Apple",
    category: "Fruit",
    quantity: 5,
    price: 1.0,
    lowStockThreshold: 10
  },
  {
    id: "2",
    name: "Banana",
    category: "Fruit",
    quantity: 30,
    price: 0.25,
    lowStockThreshold: 10
  },
  {
    id: "3",
    name: "Carrot",
    category: "Vegetable",
    quantity: 3,
    price: 0.3,
    lowStockThreshold: 8
  },
  {
    id: "4",
    name: "Chicken Breast",
    category: "Meat",
    quantity: 0,
    price: 5.0,
    lowStockThreshold: 5
  }
];  **/

function LowStockAlerts({
  inventory = dataInventory
}: {
  inventory: InventoryItem[];
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