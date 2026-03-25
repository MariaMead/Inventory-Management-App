import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { locationSeedData, productSeedData } from "./seedDataLocationsProducts";


const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Locations...");
  for(const location of locationSeedData) {
    await prisma.location.upsert({
      where: { name: location.name },
      update: {},
      create: location,
    });
  }

  console.log("Seeding Products....");
  for(const product of productSeedData) {
    await prisma.product.upsert({
      where: {
        name_manufacturer: {
          name: product.name,
          manufacturer: product.manufacturer,
        },
      },
      update: {},
      create: product,
    });
  }

  
};

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });