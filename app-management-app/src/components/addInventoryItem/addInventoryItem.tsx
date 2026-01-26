import { useState } from "react";
import type { InventoryItem } from "../inventorySearch/inventorySearch";

export function AddInventoryItemForm({
    addInventoryItem
}: {
    inventory: InventoryItem[],
    addInventoryItem: (item: InventoryItem) => void
}) {
    const [name, setName] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");
    const [ quantity, setQuantity ] = useState<number>(0);
    const [ price, setPrice ] = useState<number>(0);
    const [ error, setError ] = useState<string>("");

    const formSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if(!name) {
            setError("Name of item cannot be blank");
            return;
        }

        if(!category) {
            setError("Must have a category.");
            return;
        }

        if(!quantity) {
            setError("Must have a quantity");
            return;
        }

        if(!price) {
            setError("Must have a price");
            return;
        }

        addInventoryItem({ name, category, quantity, price});
        setName("");
        setCategory("");
        setQuantity(0);
        setPrice(0);
    };

    return(
        <form onSubmit={formSubmit}>
            <div>
                <label>Item Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>

            <div>
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.valueAsNumber)}
                />
            </div>

            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(event) => setQuantity(event.target.valueAsNumber)}
                />
            </div>

            <div>
                {error && <p>{error}</p>}
            </div>
            <input
                type="submit"
                className="submitButton"
                disabled={!name || !category || !quantity || !price}
            />
        </form>
    )
}