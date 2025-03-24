import express from "express";
import { createUser } from "../controllers/user.controller";
import Joi from "joi";
import { validateRequest } from "../_middleware/validate-request";

const router = express.Router();

// Create a new user
router.post("/", createSchema, createUser);

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

export default router;