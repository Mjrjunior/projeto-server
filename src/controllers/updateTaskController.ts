import { Request, Response } from "express";
import { UpdateTaskService } from "../services/updateTaskService";
import { prisma } from "../lib/prisma";

export class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {title, description} = request.body;

        const updatedTaskService = new UpdateTaskService(prisma);

        const task = await updatedTaskService.execute({id, title, description});

        // if(!title || !description) {
        //     return response.status(400).json({ error: "Missing title or description" });
        // }
        return response.status(200).json(task);
    }
}