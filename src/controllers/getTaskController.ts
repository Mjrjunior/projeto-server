import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { GetTaskService } from '../services/getTaskService';

export class GetTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const getTaskService = new GetTaskService(prisma);

        const task = await getTaskService.execute({ id });

        if(task instanceof Error) {
            return response.status(400).json({ error: task.message });
        }
        return response.json(task);
    }
}