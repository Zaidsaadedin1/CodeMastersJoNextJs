import { requestService } from "../Services/requestService";
import { Request as ExpressRequest, Response } from "express";

export const requestController = {
  async createRequest(req: ExpressRequest, res: Response) {
    try {
      const request = await requestService.createRequest(req.body);
      return res.status(201).json(request);
    } catch (error) {
      console.error("Error creating request:", error);
      return res.status(500).json({ message: "Failed to create request" });
    }
  },

  async getAllRequests(req: ExpressRequest, res: Response) {
    try {
      const requests = await requestService.getAllRequests();
      return res.status(200).json(requests);
    } catch (error) {
      console.error("Error fetching requests:", error);
      return res.status(500).json({ message: "Failed to fetch requests" });
    }
  },

  async getRequestById(req: ExpressRequest, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const request = await requestService.getRequestById(id);

      if (!request) {
        return res.status(404).json({ message: "Request not found" });
      }

      return res.status(200).json(request);
    } catch (error) {
      console.error("Error fetching request:", error);
      return res.status(500).json({ message: "Failed to fetch request" });
    }
  },

  async getRequestsByUserId(req: ExpressRequest, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const requests = await requestService.getRequestsByUserId(userId);
      return res.status(200).json(requests);
    } catch (error) {
      console.error("Error fetching user requests:", error);
      return res.status(500).json({ message: "Failed to fetch user requests" });
    }
  },

  async updateRequest(req: ExpressRequest, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const request = await requestService.updateRequest(id, req.body);
      return res.status(200).json(request);
    } catch (error) {
      console.error("Error updating request:", error);
      return res.status(500).json({ message: "Failed to update request" });
    }
  },

  async deleteRequest(req: ExpressRequest, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await requestService.deleteRequest(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting request:", error);
      return res.status(500).json({ message: "Failed to delete request" });
    }
  },
};
