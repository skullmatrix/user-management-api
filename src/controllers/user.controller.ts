import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";


// Update a user
export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.update(req.params.id, req.body);
        res.json({
            message: "User updated successfully",
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                section: user.section
            }
        });
    } catch (error) {
        next(error);
    }
}

// Delete a user
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        await userService.delete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
}

// Get all users
export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

// Get a user by ID
export async function getUserById(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.getById(req.params.id);
        res.json(user);