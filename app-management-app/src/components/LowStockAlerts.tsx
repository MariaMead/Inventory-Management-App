interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  lowStockThreshold: number;
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Apple",
    category: "Fruit",
    quantity: 5,
    price: 1.0,
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
    quantity: 3,
    price: 0.3,
    lowStockThreshold: 8
  },
  {
    id: "4",
    name: "Chicken Breast",
    category: "Meat",
    quantity: 0,
    price: 5.0,
    lowStockThreshold: 5
  }
];