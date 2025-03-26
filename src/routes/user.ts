import express from "express";
import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
} from "../controllers/user.controller";
import Joi from "joi";
import { validateRequest } from "../_middleware/validate-request";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Get a user by ID
router.get("/:id", getUserById);

// Create a new user
router.post("/", createSchema, createUser);

// Update a user
router.put("/:id", updateSchema, updateUser);

// Delete a user
router.delete("/:id", deleteUser);

// Validation schema for user creation
function createSchema(req: express.Request, res: express.Response, next: express.NextFunction) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        section: Joi.string().required(),
    });
    validateRequest(req, res, next, schema);
}

// Validation schema for user update
function updateSchema(req: express.Request, res: express.Response, next: express.NextFunction) {
    const schema = Joi.object({
        firstName: Joi.string().empty(""),
        lastName: Joi.string().empty(""),
        email: Joi.string().email().empty(""),
        section: Joi.string().empty(""),
    });
    validateRequest(req, res, next, schema);
}

export default router;