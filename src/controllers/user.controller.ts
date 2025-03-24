import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";

// Create a new user
export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.create(req.body);
        res.status(201).json({
            message: "User created successfully",
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