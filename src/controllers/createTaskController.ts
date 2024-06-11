import { Request, Response } from 'express';
import { CreateTaskService } from '../services/createTaskService';
import { prisma } from '../lib/prisma';

export class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;

        const createTaskService = new CreateTaskService(prisma);

        const task = await createTaskService.execute({ title, description });

        if(task instanceof Error) {
            return response.status(400).json({ error: task.message });
        }

        return response.status(201).json(task);
    }
}