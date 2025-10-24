import { PrismaClient } from "~/app/generated/prisma"
const prisma = new PrismaClient()

async function connectDB() {
    try {
        await prisma.$connect()
        console.log(
            `✅ MongoDB: ${process.env.DATABASE_URL} connection successful!`
        )
    } catch (err) {
        console.error("❌ Prisma connection error:", err)
    }
}

connectDB()

export default prisma
