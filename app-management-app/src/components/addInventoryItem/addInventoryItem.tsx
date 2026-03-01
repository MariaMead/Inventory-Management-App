import type { InventoryStock } from "../../types/inventoryStock";;
import "./addInventoryItem.css"

export function AddInventoryItemForm({
    addInventoryItem
}: {
    stockData: InventoryStock[],
    addInventoryItem: (item: Omit<InventoryStock, "id">) => Promise<string | InventoryStock | null>;
}) {
    const name = useFormInput(valaidateName);
    const description = useFormInput(validateDescription);
    const location = useFormInput(validateLocation);
    const manufacturer = useFormInput(validateManufacturer);
    const category = useFormInput(validateCategory);
    const quantity = useFormInput(validateQuantity);
    const price = useFormInput(validatePrice);

    const formSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const validateName = name.validateForm();
        const validateDescription = description.validateForm();
        const validateLocation = location.validateForm();
        const validateManufacturer = manufacturer.validateForm();
        const validateCategory = category.validateForm();
        const validateQuantity = quantity.validateForm();
        const validatePrice = price.validateForm();
        
        name.setMessage(validateName.message ?? null);
        description.setMessage(validateDescription.message ?? null);
        location.setMessage(validateLocation.message ?? null);
        manufacturer.setMessage(validateLocation.message ?? null);
        category.setMessage(validateCategory.message ?? null);
        quantity.setMessage(validateQuantity.message ?? null);
        price.setMessage(validatePrice.message ?? null);

        if(!validateName.isValid || !validateDescription.isValid || 
            !validateLocation.isValid || !validateManufacturer.isValid || 
            !validateCategory.isValid || !validateQuantity.isValid || 
            !validatePrice.isValid) {
                return;
        }

        await addInventoryItem(
            { name, description, location, manufacturer, category, quantity, price }
        );

        name.setValue("");
        description.setValue("");
        location.setValue("");
        manufacturer.setValue("");
        category.setValue("");
        quantity.setValue(0);
        price.setValue(0);
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
                        value={name.value}
                        onChange={name.onChange}
                    />
                    {name.message && <p className="error">{name.message}</p>}
                </div>

                 <div className="item-data">
                    <label htmlFor="item-category">Category</label>
                    <input
                        id="item-category"
                        type="text"
                        value={category.value}
                        onChange={category.onChange}
                    />
                    {category.message && <p className="error">{category.message}</p>}
                </div>

                <div className="item-data">
                    <label htmlFor="item-manufacturer">Manufacturer</label>
                    <input
                        id="item-manufacturer"
                        type="text"
                        value={manufacturer.value}
                        onChange={manufacturer.onChange}
                    />
                    {manufacturer.message && <p className="error">{manufacturer.message}</p>}
                </div>

                <div className="item-data">
                    <label htmlFor="item-location">Location</label>
                    <input
                        id="item-location"
                        type="text"
                        value={location.value}
                        onChange={location.onChange}
                    />
                    {location.message && <p className="error">{location.message}</p>}
                </div>

                <div className="item-data">
                    <label htmlFor="item-quantity">Quantity</label>
                    <input
                        id="item-quantity"
                        type="number"
                        value={quantity.value}
                        onChange={quantity.onChange}
                    />
                    {quantity.message && <p className="error">{quantity.message}</p>}
                </div>

                <div className="item-data">
                    <label htmlFor="item-price">Price</label>
                    <input
                        id="item-price"
                        type="number"
                        value={price.value}
                        onChange={price.onChange}
                    />
                    {price.message && <p className="error">{price.message}</p>}
                </div>

                    <div className="item-data">
                    <label htmlFor="item-description">Description</label>
                    <textarea
                        id="item-description"
                        value={description.value}
                        onChange={description.onChange}
                    />
                    {description.message && <p className="error">{description.message}</p>}
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