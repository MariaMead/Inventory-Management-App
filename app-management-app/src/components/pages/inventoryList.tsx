import type { InventoryItem } from "../../Inventory/inventoryData";
import  InventorySearch from "../inventorySearch/inventorySearch";


export function InventoryList (
    {
        inventory,
        setInventoryList
        
    }:
    {
        inventory: InventoryItem[],
        setInventoryList: React.Dispatch<React.SetStateAction<InventoryItem[]>>
    }
) {

    return(
        <>
        <main>
            <InventorySearch
                inventory={inventory}
                setInventoryList={setInventoryList}
            />
        </main>
        </>
    )
} 