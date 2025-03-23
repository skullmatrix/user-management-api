import express from "express";
import { initialize } from "./_helpers/db";
import usersRouter from "./controllers/UserController";
import { errorHandler } from "./_middleware/error-handler";

const app = express();

// Initialize database connection
initialize()
    .then(() => {
        console.log("Database initialized successfully.");
    })
    .catch((error) => {
        console.error("Failed to initialize the database:", error);
        process.exit(1);
    });

// Middleware
app.use(express.json());

// Routes
app.use("/users", usersRouter);

// Global error handler
app.use(errorHandler);

const port = process.env.PORT || 1569;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;