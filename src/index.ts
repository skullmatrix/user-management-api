import express from "express";
import { errorHandler } from "./_middleware/error-handler";
import { initialize } from "./_helpers/db";
import userRoutes from "./routes/user";

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize the database
initialize()
    .then(() => {
        console.log("Database initialized successfully.");
    })
    .catch((error) => {
        console.error("Failed to initialize the database:", error);
        process.exit(1);
    });

// API routes
app.use("/users", userRoutes);

// Global error handler
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 1569;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});