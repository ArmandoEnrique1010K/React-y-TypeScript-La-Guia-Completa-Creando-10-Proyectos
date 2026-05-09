import { categories } from "./data/categories";
import { products } from "./data/products";
import { prisma } from "../src/lib/prisma";

async function main() {
  try {
    await prisma.category.createMany({
      data: categories,
    });
    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
