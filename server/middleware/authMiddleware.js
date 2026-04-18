import User from "../models/User.js";

// Middleware to check if the user is authenticated
export const protect = async (req, res, next) => {
    const userId = req.auth;
}