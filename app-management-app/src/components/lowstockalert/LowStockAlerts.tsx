import "./lowStockAlert.css"

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  lowStockThreshold: number;
}

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
      onChange={e => onChange(Number(e.target.valueAsNumber))}
    />
  );
}

function LowStockAlerts({
  inventory,
  setInventory
}: {
  inventory: InventoryItem[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
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

                    <td>
                      <QuantityEditor
                        value={item.quantity}
                        onChange={newQuantity => {
                          const updatedInventory = inventory.map(invItem =>
                            invItem.id === item.id
                              ? { ...invItem, quantity: newQuantity }
                              : invItem
                          );
                          setInventory(updatedInventory);
                        }}
                      />
                    </td>
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