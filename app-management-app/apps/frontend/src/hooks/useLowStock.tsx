import { useEffect, useState } from "react";
import type { FrontendInventoryStock as InventoryStock } from "@shared/types/frontend-InventoryStock";
import {
    fetchLowStockItems,
    updateLowStockItem,
    deleteLowStockItem
} from "../apis/lowStockRepo";

export function useLowStock() {
    const [items, setItems] = useState<InventoryStock[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const loadItems = async () => {
        try {
            setLoading(true);
            const data = await fetchLowStockItems();
            setItems(data);
            setError(null);
        } catch (error) {
            setError("Failed to load low stock items.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const updateQuantity = async (
        item: InventoryStock,
        newQuantity: number
    ) => {
        try {
            await updateLowStockItem(item.id!, {
                quantity: newQuantity,
                lowStockThreshold: item.lowStockThreshold
            });

            await loadItems();
        } catch (error) {
            setError("Failed to update item.");
        }
    };

    const removeItem = async (id: string) => {
        try {
            await deleteLowStockItem(id);
            await loadItems();
        } catch (error) {
            setError("Failed to delete item.");
        }
    };

    return {
        items,
        error,
        loading,
        updateQuantity,
        removeItem
    };
}