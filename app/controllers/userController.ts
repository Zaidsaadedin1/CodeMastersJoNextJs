import { Request, Response } from "express";
import { userService } from "../Services/userService";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export const userController = {
  async createUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      console.log("Controller received body:", req.body);

      // Check if password exists
      if (!req.body || !req.body.password) {
        return res.status(400).json({
          message: "Password is required",
        });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const userData = {
        ...req.body,
        password: hashedPassword,
      };

      console.log("Processing user data:", {
        ...userData,
        password: "[REDACTED]",
      });

      const user = await userService.createUser(userData);

      // Remove password from response
      const { password, ...userWithoutPassword } = user;

      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Failed to create user" });
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();

      // Remove passwords from response
      const usersWithoutPasswords = users.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });

      return res.status(200).json(usersWithoutPasswords);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ message: "Failed to fetch users" });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Remove password from response
      const { password, ...userWithoutPassword } = user;

      return res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Failed to fetch user" });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      let userData = { ...req.body };

      // If password is being updated, hash it
      if (userData.password) {
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);
      }

      const user = await userService.updateUser(id, userData);

      // Remove password from response
      const { password, ...userWithoutPassword } = user;

      return res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Failed to update user" });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await userService.deleteUser(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Failed to delete user" });
    }
  },
};
