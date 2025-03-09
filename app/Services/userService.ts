import { User } from "@prisma/client";

import { prisma } from "../prisma";

export type CreateUserInput = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: Date;
  occupation?: string;
  bio?: string;
  interests: string[];
  location?: string;
  referralSource?: string;
  termsAccepted: boolean;
  roleId?: number;
};

export type UpdateUserInput = Partial<Omit<CreateUserInput, "password">> & {
  password?: string;
};

export const userService = {
  // Create a new user
  async createUser(data: CreateUserInput): Promise<User> {
    return prisma.user.create({
      data,
      include: {
        role: true,
      },
    });
  },

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany({
      include: {
        role: true,
        requests: true,
      },
    });
  },

  // Get user by id
  async getUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        requests: true,
      },
    });
  },

  // Get user by email
  async getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
      },
    });
  },

  // Get user by username
  async getUserByUsername(username: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { username },
      include: {
        role: true,
      },
    });
  },

  // Update user
  async updateUser(id: number, data: UpdateUserInput): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
      include: {
        role: true,
      },
    });
  },

  // Delete user
  async deleteUser(id: number): Promise<User> {
    return prisma.user.delete({
      where: { id },
      include: {
        role: true,
      },
    });
  },
};
