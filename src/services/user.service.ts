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

    update,
    delete: _delete,
};

// Helper function to get a user by ID
async function getUser(id: string) {
    if (!db.connection) throw new Error("Database connection not established");
    const user = await db.connection.getRepository(User).findOne({ where: { id } });
    if (!user) throw new Error("User not found");
    return user;
}

// Update a user
async function update(id: string, params: any) {
    if (!db.connection) throw new Error("Database connection not established");

    // Get the user by ID
    const user = await getUser(id);

    // Check if the new email is already registered
    if (params.email && user.email !== params.email) {
        const existingUser = await db.connection.getRepository(User).findOne({ where: { email: params.email } });
        if (existingUser) {
            throw new Error(`Email "${params.email}" is already registered`);
        }
    }

    // Update the user
    Object.assign(user, params);
    await db.connection.getRepository(User).save(user);

    return user;
}

// Delete a user
async function _delete(id: string) {
    if (!db.connection) throw new Error("Database connection not established");

    // Get the user by ID
    const user = await getUser(id);

    // Delete the user
    await db.connection.getRepository(User).remove(user);
}

// Export the user service
export default userService;