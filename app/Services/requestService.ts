// services/requestService.ts
import { Request } from "@prisma/client";

// Use shared Prisma instance
import { prisma } from "../prisma";

export type CreateRequestInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType: string;
  serviceType: string;
  budget: number;
  timeline: string;
  projectDescription: string;
  additionalRequirements?: string;
  termsAccepted: boolean;
  attachments?: string;
  userId?: number;
};

export type UpdateRequestInput = Partial<CreateRequestInput>;

export const requestService = {
  // Create a new request
  async createRequest(data: CreateRequestInput): Promise<Request> {
    return prisma.request.create({
      data,
      include: {
        user: true,
      },
    });
  },

  // Get all requests
  async getAllRequests(): Promise<Request[]> {
    return prisma.request.findMany({
      include: {
        user: true,
      },
    });
  },

  // Get request by id
  async getRequestById(id: number): Promise<Request | null> {
    return prisma.request.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  },

  // Get requests by user id
  async getRequestsByUserId(userId: number): Promise<Request[]> {
    return prisma.request.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
  },

  // Update request
  async updateRequest(id: number, data: UpdateRequestInput): Promise<Request> {
    return prisma.request.update({
      where: { id },
      data,
      include: {
        user: true,
      },
    });
  },

  // Delete request
  async deleteRequest(id: number): Promise<Request> {
    return prisma.request.delete({
      where: { id },
    });
  },
};
