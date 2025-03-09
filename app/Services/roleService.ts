// services/roleService.ts
import { Role } from "@prisma/client";

// Create a single PrismaClient instance for the entire app
import { prisma } from "../prisma";

export const roleService = {
  // Create a new role
  async createRole(data: { name: string }): Promise<Role> {
    return prisma.role.create({
      data,
    });
  },

  // Get all roles
  async getAllRoles(): Promise<Role[]> {
    return prisma.role.findMany({
      include: {
        users: true,
      },
    });
  },

  // Get role by id
  async getRoleById(id: number): Promise<Role | null> {
    return prisma.role.findUnique({
      where: { id },
      include: {
        users: true,
      },
    });
  },

  // Get role by name
  async getRoleByName(name: string): Promise<Role | null> {
    return prisma.role.findUnique({
      where: { name },
      include: {
        users: true,
      },
    });
  },

  // Update role
  async updateRole(id: number, data: { name: string }): Promise<Role> {
    return prisma.role.update({
      where: { id },
      data,
    });
  },

  // Delete role
  async deleteRole(id: number): Promise<Role> {
    return prisma.role.delete({
      where: { id },
    });
  },
};
