import type { InventoryStock } from "../types/inventoryStock";
import { stockData } from "./stockData";

/**
 * A function to fetch all data from InventoryStock
 * @returns - All data found in InventoryStock[]
 */
export function fetchAllInventoryStock(): InventoryStock[] {
    return [...stockData];
}

/**
 * A function to fetch inventory by its ID
 * @param stockId - The ID of the stock item
 * @returns - The found stock ID by its ID
 */
export function getInventoryStockById(stockId: string): InventoryStock {
    const foundStock = stockData.find(item => item.id === stockId);

    if(!foundStock) {
        throw new Error(`Failed to fetch stock item with ${stockId}`);
    }

    return {...foundStock};
}

/**
 * A function to fetch an inventory item by its ID to update.
 * @param stock - The stock item to update
 * @returns - The found stock data to update
 */
export async function updateInventoryStock(stock: InventoryStock) {
    const foundStockIndex = stockData.findIndex(item => item.id === stock.id);

    if(foundStockIndex === -1) {
        throw new Error(`Failed to update stock item with ${stock.id}`);
    }

    stockData[foundStockIndex] = stock;
    return stockData[foundStockIndex];
}

/**
 * Function to add a new stock item to a inventory list, only allowing data to be added if
 * the location, name and manufacturer are not already existing.
 * @param newStock - The new item being added to the inventory list
 * @returns - The new stock item added
 */
export async function addStockInventory(newStock: InventoryStock): Promise<InventoryStock>{
    // Checks to see if the item matches name, location and manufacturer.
    const exists = stockData.some(item => 
        item.name === newStock.name &&
        item.location === newStock.location && 
        item.manufacturer === newStock.manufacturer)

    if(exists) {
        throw new Error(
            `Item ${newStock.name} already exists in that ${newStock.location}.`
        );
    } 
    stockData.push(newStock);
    
    return {...newStock};
}

/**
 * A function to fetch an item by its ID and then have it removed from 
 * inventory stock data.
 * @param stockId - The stock item by its ID
 * @returns - A copy of the data without the item ID we removed
 */
export async function deleteStockInventoryItem(
    stockId: string
): Promise<InventoryStock[]> {
    // Find the index of the stock item by its ID
    const stockIndex = stockData.findIndex(item => item.id === stockId);

    if(stockIndex === -1) {
        throw new Error(`Failed to fetch item ${stockId}.`);
    } 
    // removes at the correct index
    stockData.splice(stockIndex, 1); 
  
    return [...stockData];
}