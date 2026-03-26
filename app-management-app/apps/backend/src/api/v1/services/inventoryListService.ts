import type { FrontendInventoryStock }from "@shared/types/frontend-InventoryStock";
import { prisma } from "../../../../prisma/prismaClient";


/**
 * A function to return all items in stockData
 * @returns -All items in stock data
 */
export const getAllInventoryStock = async(): Promise<FrontendInventoryStock[]> => {
    // nested read
    const allStockData = await prisma.product.findMany({
        select: {
            name: true,
            description: true,
            manufacturer: true,
            category: true,
            price: true,
            inventory:  {
                select: {
                    quantity: true,
                    threshold: true,
                    location: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });
    //Formatting the data to match the oject for backend and frontend as incoming data will be nested.
    const formattedData: FrontendInventoryStock[] = allStockData.flatMap(product => 
        product.inventory.map((inventory: { quantity: number; threshold: number; location:{name: string}
        }) => ({
            id: product.id.toString(),
            name: product.name,
            description: product.description,
            manufacturer: product.manufacturer,
            category: product.category,
            price: product.price,
            quantity: inventory.quantity,
            lowStockThreshold: inventory.threshold,
            location: inventory.location.name
        }))
    )

    return formattedData;

};

/**
 * - Function to create a new Inventory item for stock data.
 * @param itemData - The data required to created a new inventory item
 * @returns - the new item created
 */
export const createStockItem = async (
    itemData: FrontendInventoryStock
): Promise<FrontendInventoryStock> => {
    try {
        //Create an entry for Product table
        const product = await prisma.product.upsert({
            where: { name_manufacturer: { name: itemData.name, manufacturer: itemData.manufacturer } },
            update: {},
            create: {
                name: itemData.name,
                description: itemData.description,
                category: itemData.category.toUpperCase() as Category, //Enums
                manufacturer: itemData.manufacturer.replace(/ & /g, "_").toUpperCase() as Manufacturer, //Enums
                price: itemData.price,
            },
        });

        // check it the location exists
        const location = await prisma.location.findFirst({
            where: { name: itemData.location }
        });

        if (!location) {
            throw new Error(`Location '${itemData.location}' not found`);
        }

        // Create an entry for Inventory table
        const inventory = await prisma.inventory.create({
            data: {
                product: { connect: { id: product.id } },
                location: { connect: {id: location.id } },
                quantity: itemData.quantity,
                threshold: itemData.lowStockThreshold,
            },
        });

        // returns 
        return {
            name: itemData.name,
            description: itemData.description,
            manufacturer: itemData.manufacturer,
            category: itemData.category,
            price: itemData.price,
            quantity: itemData.quantity,
            lowStockThreshold: itemData.lowStockThreshold,
            location: itemData.location
        };
            
    } catch (error: unknown) {
        throw error;
    }
};