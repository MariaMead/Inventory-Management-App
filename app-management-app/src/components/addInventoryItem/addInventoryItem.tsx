import { useState } from "react";
import type { InventoryItem } from "../inventorySearch/inventorySearch";
import "./addInventoryItem.css"

export function AddInventoryItemForm({
    addInventoryItem
}: {
    addInventoryItem: (item: Omit<InventoryItem, "id">) => void
}) {
    const [name, setName] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");
    const [ quantity, setQuantity ] = useState<number>(0);
    const [ price, setPrice ] = useState<number>(0);
    const [ error, setError ] = useState<string>("");

    const formSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if(!name || name.length < 3) {
            setError("Name of item cannot be blank and must have more then 3 characters.");
            return;
        }

        if(!category || category.length < 3) {
            setError("Must have a category and have more then 3 characters.");
            return;
        }

        if(!quantity || quantity <= 0) {
            setError("Must have a quantity and be greater than 0");
            return;
        }

        if(!price || price <= 0) {
            setError("Must have a price and be greater than 0");
            return;
        }

        addInventoryItem({ name, category, quantity, price});
        setName("");
        setCategory("");
        setQuantity(0);
        setPrice(0);
    };

    return(
        <div className="inventory-form">
            <h3 className="title">Add Inventory Items</h3>
            <form onSubmit={formSubmit}>
                <div className="item-data">
                    <label htmlFor="item-name">Item Name:</label>
                    <input
                        id="item-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-category">Category:</label>
                    <input
                        id="item-category"
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-quantity">Quantity:</label>
                    <input
                        id="item-quantity"
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.valueAsNumber)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-price">Price:</label>
                    <input
                        id="item-price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.valueAsNumber)}
                    />
                </div>

                <div>
                    {error && <p>{error}</p>}
                </div>
                <input
                    type="submit"
                    className="submitButton"
                    value="Add"
                    disabled={!name || !category || !quantity || !price}
                />
            </form>
        </div>
    )
}