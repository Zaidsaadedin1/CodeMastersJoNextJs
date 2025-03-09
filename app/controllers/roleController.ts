import { Request, Response } from "express";
import { roleService } from "../Services/roleService";

export const roleController = {
  async createRole(req: Request, res: Response) {
    try {
      const role = await roleService.createRole(req.body);
      return res.status(201).json(role);
    } catch (error) {
      console.error("Error creating role:", error);
      return res.status(500).json({ message: "Failed to create role" });
    }
  },

  async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await roleService.getAllRoles();
      return res.status(200).json(roles);
    } catch (error) {
      console.error("Error fetching roles:", error);
      return res.status(500).json({ message: "Failed to fetch roles" });
    }
  },

  async getRoleById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const role = await roleService.getRoleById(id);

      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      return res.status(200).json(role);
    } catch (error) {
      console.error("Error fetching role:", error);
      return res.status(500).json({ message: "Failed to fetch role" });
    }
  },

  async updateRole(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const role = await roleService.updateRole(id, req.body);
      return res.status(200).json(role);
    } catch (error) {
      console.error("Error updating role:", error);
      return res.status(500).json({ message: "Failed to update role" });
    }
  },

  async deleteRole(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await roleService.deleteRole(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting role:", error);
      return res.status(500).json({ message: "Failed to delete role" });
    }
  },
};
