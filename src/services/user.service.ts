import { User } from "../entities/User";
import { db } from "../_helpers/db";

// Define the user service methods
const userService = {
    getAll,
    getById,
};

// Get all users
async function getAll() {
    if (!db.connection) throw new Error("Database connection not established");
    return await db.connection.getRepository(User).find();
}

// Get a user by ID
async function getById(id: string) {
    if (!db.connection) throw new Error("Database connection not established");
    const user = await db.connection.getRepository(User).findOne({ where: { id } });
    if (!user) throw new Error("User not found");
    return user;
}

// Export the user service
export default userService;