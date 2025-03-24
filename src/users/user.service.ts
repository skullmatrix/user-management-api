import { User } from "./user.model";
import { db } from "../_helpers/db";

// Define the user service methods
const userService = {
    create,
};

// Create a new user
async function create(params: any) {
    if (!db.connection) throw new Error("Database connection not established");

    // Validate required fields
    if (!params.email || !params.firstName || !params.lastName || !params.section) {
        throw new Error("Email, firstName, lastName, and section are required");
    }

    // Check if the email is already registered
    const existingUser = await db.connection.getRepository(User).findOne({
        where: { email: params.email },
    });
    if (existingUser) {
        throw new Error("Email is already registered");
    }

    // Create a new user
    const user = new User();
    Object.assign(user, params);

    // Save the user to the database
    await db.connection.getRepository(User).save(user);
    return user;
}

// Export the user service
export default userService;