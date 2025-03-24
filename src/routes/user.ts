import express from "express";
import Joi from "joi";
import { getAllUsers, getUserById } from "../controllers/user.controller";
import { updateUser, deleteUser } from "../controllers/user.controller";
import { validateRequest } from "../_middleware/validate-request";

const router = express.Router();

// Update a user
router.put("/:id", updateSchema, updateUser);

// Delete a user
router.delete("/:id", deleteUser);

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