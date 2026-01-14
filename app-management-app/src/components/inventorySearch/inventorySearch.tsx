
interface InventoryItem {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
}
const inventory: InventoryItem[] = [];

// Function to look up inventory
function InventorySearch({inventory}: {inventory: InventoryItem[]}) {

    return(
        <section className="inventory-search">
            <h2>Current Inventory</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                    {/*Data for table will be populated here.*/}
                <tbody className="inventoryTableBody">
                    {inventory.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default InventorySearch;

