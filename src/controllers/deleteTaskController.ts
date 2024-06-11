import { Request, Response } from 'express';
import { DeleteTaskService } from '../services/deleteTaskService';
import { prisma } from '../lib/prisma';

export class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const deleteTaskService = new DeleteTaskService(prisma);
        const task = await deleteTaskService.execute({ id });

        if(task instanceof Error) {
            return response.status(400).json({ error: task.message });
        }
        return response.status(204).send();
    }
}
