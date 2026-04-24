import type { FrontendInventoryStock as InventoryStock } from "@shared/types/frontend-InventoryStock";

type InventoryStocksResponseJSON = {
    message: string;
    data: InventoryStock[];
};

type InventoryStockResponseJSON = {
    message: string;
    data: InventoryStock;
};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const LOW_STOCK_ENDPOINT = "/low-stock";

/**
 * Fetch all low stock items
 * @returns - all low stock items
 */
export async function fetchLowStockItems(token: string | null): Promise<InventoryStock[]> {
    const lowStockResponse: Response = await fetch(
        `${BASE_URL}${LOW_STOCK_ENDPOINT}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include"
        }
    );

    if (!lowStockResponse.ok) {
        throw new Error("Failed to fetch low stock items.");
    }

    const json: InventoryStocksResponseJSON = await lowStockResponse.json();
    return json.data;
}

/**
 * Get one low stock item by id
 * @param id - item id
 * @returns - low stock item with given id
 */
export async function getLowStockItemById(
    id: string
): Promise<InventoryStock> {
    const lowStockItemResponse: Response = await fetch(
        `${BASE_URL}${LOW_STOCK_ENDPOINT}/${id}`,
        {
            credentials: "include"
        }
    );

    if (!lowStockItemResponse.ok) {
        throw new Error(`Failed to fetch low stock item with the id of ${id}`);
    }

    const json: InventoryStockResponseJSON = await lowStockItemResponse.json();
    return json.data;
}

/**
 * Update a low stock item
 * @param id - item id
 * @param updatedItem - updated values
 * @returns - updated low stock item
 */
export async function updateLowStockItem(
    id: string,
    updatedItem: Pick<InventoryStock, "quantity" | "lowStockThreshold">,
    token: string | null
): Promise<InventoryStock> {
    const updatedLowStockResponse: Response = await fetch(
        `${BASE_URL}${LOW_STOCK_ENDPOINT}/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                quantity: updatedItem.quantity,
                lowStockThreshold: updatedItem.lowStockThreshold
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include"
        }
    );

    if (!updatedLowStockResponse.ok) {
        throw new Error(`Failed to update item with the id of ${id}`);
    }

    const json: InventoryStockResponseJSON = await updatedLowStockResponse.json();
    return json.data;
}

/**
 * Delete a low stock item
 * @param id - item id
 * @param token - authentication token
 */
export async function deleteLowStockItem(id: string, token: string | null): Promise<void> {
    const deleteLowStockResponse: Response = await fetch(
        `${BASE_URL}${LOW_STOCK_ENDPOINT}/${id}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include"
        }
    );

    if (!deleteLowStockResponse.ok) {
        throw new Error(`Failed to delete item with the id of ${id}`);
    }
}
