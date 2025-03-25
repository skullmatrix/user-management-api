import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";

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
    } catch (error) {
        next(error);
    }
}