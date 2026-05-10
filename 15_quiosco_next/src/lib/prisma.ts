// MODO DE DESARROLLO
// import { Pool } from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client";

// const connectionString = process.env.DATABASE_URL!;
// const pool = new Pool({
//   connectionString,
// });
// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({
//   adapter,
// });
// export { prisma };

// MODO DE PRODUCCIÓN (SINGLETON)
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { Pool } from "pg";

// Define un tipo para el objeto global
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

// const adapter = new PrismaPg({ connectionString });

// Usa la instancia existente o crea una nueva
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// En desarrollo, asigna la instancia al objeto global
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
