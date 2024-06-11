import { Request, Response } from 'express';
import { prisma } from "../lib/prisma";
import { GetTasksService } from "../services/getTasksService";



export class GetTasksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getTasksService = new GetTasksService(prisma);

        const tasks = await getTasksService.execute();

        return response.json(tasks);
    }
}