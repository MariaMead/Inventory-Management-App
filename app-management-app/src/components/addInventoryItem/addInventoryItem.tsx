import { useState } from "react";
import type { InventoryStock } from "../../types/inventoryStock";
import "./addInventoryItem.css"

export function AddInventoryItemForm({
    addInventoryItem
}: {
    addInventoryItem: (item: Omit<InventoryStock, "id">) => void
}) {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [ manufacturer, setManufacturer] = useState<string>("");
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

       

        addInventoryItem({ name, description, location, manufacturer, category, quantity, price });
        setName("");
        setDescription("");
        setLocation("");
        setManufacturer("");
        setCategory("");
        setQuantity(0);
        setPrice(0);
    };

    return(
        <div className="inventory-form">
            <h3 className="title">ADD INVENTORY ITEMS</h3>
            <form onSubmit={formSubmit}>
                <div className="item-data">
                    <label htmlFor="item-name">Item Name</label>
                    <input
                        id="item-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                 <div className="item-data">
                    <label htmlFor="item-category">Category</label>
                    <input
                        id="item-category"
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-manufacturer">Manufacturer</label>
                    <input
                        id="item-manufacturer"
                        type="text"
                        value={manufacturer}
                        onChange={(event) => setManufacturer(event.target.value)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-location">Location</label>
                    <input
                        id="item-location"
                        type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-quantity">Quantity</label>
                    <input
                        id="item-quantity"
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.valueAsNumber)}
                    />
                </div>

                <div className="item-data">
                    <label htmlFor="item-price">Price</label>
                    <input
                        id="item-price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.valueAsNumber)}
                    />
                </div>

                    <div className="item-data">
                    <label htmlFor="item-description">Description</label>
                    <textarea
                        id="item-description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <div>
                    {error && <p>{error}</p>}
                </div>

                <div className="button-cell">
                <input
                    type="submit"
                    className="submitButton"
                    value="ADD"
                    disabled={!name || !description || !location || !manufacturer || !category || !quantity || !price}
                />
                </div>
            </form>
        </div>
    )
}