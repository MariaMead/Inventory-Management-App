import { useState } from "react";
import { stockData } from "../../apis/stockData";
import type { InventoryStock } from "../../types/inventoryStock";
import  InventorySearch from "../inventorySearch/inventorySearch";


export function InventoryList () {
    const [stockList, setInventoryStock] = useState<InventoryStock[]>(stockData);
    return(
        <>
        <main>
            <InventorySearch
                stockList={stockList}
                setInventoryStock={setInventoryStock}
            />
        </main>
        </>
    )
} 