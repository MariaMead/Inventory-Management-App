import type { InventoryItem } from '../Inventory/inventoryData';

export const inventoryService = {
    getLowStockItems(inventory: InventoryItem[]): InventoryItem[] {
        return inventory.filter(
            item => item.quantity <= item.lowStockThreshold
        );
    },

    addItem(
        inventory: InventoryItem[], 
        newItem: Omit<InventoryItem, "id">
        ): InventoryItem[] {
        const newId = String(inventory.length + 1);

        return [
            ...inventory,
            {
                ...newItem,
                id: newId
            }
        ];
    },

    updateQuantity(
        inventory: InventoryItem[], 
        id: string, 
        newQuantity: number
    ): InventoryItem[] {
        return inventory.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
    },

    removeItem(
        inventory: InventoryItem[], 
        id: string
    ): InventoryItem[] {
        return inventory.filter(item => item.id !== id);

    }
};