export type InventoryItem = {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    lowStockThreshold: number;
}
//Test data for Inventory list
export const dataInventory: InventoryItem[] = [
    {
    id: "1",
    name: "Apple",
    category: "Fruit",
    quantity: 50,
    price: 0.5,
    lowStockThreshold: 10
  },
  {
    id: "2",
    name: "Banana",
    category: "Fruit",
    quantity: 30,
    price: 0.25,
    lowStockThreshold: 10
  },
  {
    id: "3",
    name: "Carrot",
    category: "Vegetable",
    quantity: 40,
    price: 0.3,
    lowStockThreshold: 8
  },
  {
    id: "4",
    name: "Broccoli",
    category: "Vegetable",
    quantity: 20,
    price: 0.75,
    lowStockThreshold: 9
  },
  {
    id: "5",
    name: "Chicken Breast",
    category: "Meat",
    quantity: 4,
    price: 5.0,
    lowStockThreshold: 5
  }
];