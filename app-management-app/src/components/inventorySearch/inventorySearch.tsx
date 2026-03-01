import { useSearchFilter } from "../../hooks/useSearchFilter";
import "./inventorySearch.css";

import { AddInventoryItemForm } from "../addInventoryItem/addInventoryItem";
import type { InventoryStock }  from "../../types/inventoryStock";
import { useState } from "react";


// Function to filter inventory by text in a search field
function InventorySearch({
        stockList,
        setInventoryStock
    }: 
    {
        stockList: InventoryStock[],
        setInventoryStock: React.Dispatch<React.SetStateAction<InventoryStock[]>>;
    }) {
    //Setting state to prepare for input to change state used a custom hook called useSearch filter
    const { search, setSearch, filteredText } = useSearchFilter(stockList, "name");

    const [showForm, setShowForm] = useState(false);
    // Adding inventory item to bottom of list with last number + 1 for Id
    // will need to be adjusted when database introduced
    const addInventoryItem = async(item: Omit<InventoryStock, "id">): Promise<string | InventoryStock> => {
        try {
            const result = await addInventoryService(item);

            setInventoryStock(prev => [
                ...prev.filter(
                    item => 
                        item.name !== result.name || item.description !== result.description ||
                        item.location !== result.location || item.manufacturer !== result.manufacturer ||
                        item.category !== result.category || item.quantity !== result.quantity ||
                        item.price !== result.price
                ), {...result}
            ]);
            return result;
        } catch (error: unknown) {
            if(error instanceof Error) {
                return error.message;
            }
            return "An unexpected error occurred.";
        }
        
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

            {/* A button to toggle the form or hide it when not needed */}
            <button
                type="button"
                className="toggleFormButton"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Hide Form" : "Add New Item"}
            </button>
            {/* We show form and render it to the page*/}
            {showForm && (
                <AddInventoryItemForm
                    stockData={stockList} 
                    addInventoryItem={addInventoryItem} 
                />
            )}

            <table className="inventoryTable">
                <thead>
                    <tr className="header-title">
                        <th>Id</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Manufacturer</th>
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
                            <td>{item.description}</td>
                            <td>{item.location}</td>
                            <td>{item.manufacturer}</td>
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

