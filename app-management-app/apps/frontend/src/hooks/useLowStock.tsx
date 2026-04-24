import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { FrontendInventoryStock as InventoryStock } from "@shared/types/frontend-InventoryStock";
import {
    fetchLowStockItems,
    updateLowStockItem,
    deleteLowStockItem
} from "../apis/lowStockRepo";

export function useLowStock() {
    const { getToken,isSignedIn } = useAuth();
    const [items, setItems] = useState<InventoryStock[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const loadItems = async () => {
        try {
            setLoading(true);
            
        if (!isSignedIn) {
            setItems([]);
            return;
        }

            const token = await getToken();
            const data = await fetchLowStockItems(token);

            setItems(data);
        } catch (error) {
            setError("Failed to load low stock items.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems();
    }, [isSignedIn]);

    const updateQuantity = async (
        item: InventoryStock,
        newQuantity: number
    ) => {
        const token = await getToken();
        try {
            await updateLowStockItem(item.id!, {
                quantity: newQuantity,
                lowStockThreshold: item.lowStockThreshold
            }, token);

            await loadItems();
        } catch (error) {
            setError("Failed to update item.");
        }
    };

    const removeItem = async (id: string) => {
        const token = await getToken();
        try {
            await deleteLowStockItem(id, token);
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