import { useState } from "react";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import "./inventorySearch.css";
import { AddInventoryItemForm } from "../addInventoryItem/addInventoryItem";

export interface InventoryItem {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
}
//Test data for Inventory list
 export const dataInventory: InventoryItem[] = [
{ id: "1", name: "Apple", category: "Fruit", quantity: 50, price: 0.5 },
  { id: "2", name: "Banana", category: "Fruit", quantity: 30, price: 0.25 },
  { id: "3", name: "Carrot", category: "Vegetable", quantity: 40, price: 0.3 },
  { id: "4", name: "Broccoli", category: "Vegetable", quantity: 20, price: 0.75 },
  { id: "5", name: "Chicken Breast", category: "Meat", quantity: 15, price: 5.0 }
];


// Function to filter inventory by text in a search field
function InventorySearch({inventory = dataInventory}: {inventory?: InventoryItem[]}) {
    //Setting state to prepare for input to change state used a custom hook called useSearch filter
    const [items, setInventoryList] = useState<InventoryItem[]>(inventory);
    const {search, setSearch, filteredText} = useSearchFilter(items, "name");
   
    const addInventoryItem = (item: InventoryItem): void => {
        setInventoryList((prev) => [
            ...prev, 
            {
                ...item,
                id: String(prev.length + 1)
            }
        ]);
    }

    return(
        // Inventory section to show a table of inventory items
        <section className="inventory-search">
            <h2>Current Inventory</h2>
            <label className="searchLabel">
                Inventory Search:
                <input
                    type="text"
                    value={search}
                    onChange={(text: React.ChangeEvent<HTMLInputElement>) =>
                        setSearch(text.target.value)}
                />    
            </label>
            <AddInventoryItemForm 
            addInventoryItem={addInventoryItem}
            inventory={items}/>

            <table className="inventoryTable">
                <thead>
                    <tr className="header-title">
                        <th>Id</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                    {/*Data for table will be populated here.*/}
                <tbody className="inventoryTableBody">
                    {filteredText.map((item) => (
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

