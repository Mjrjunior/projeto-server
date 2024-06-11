import { PrismaClient } from "@prisma/client";


export class UpdateTaskService {
    constructor(private prisma: PrismaClient) {}

    async execute({id, title, description}: {id: string, title: string, description: string}) {
        const existingTask = await this.prisma.task.findUnique({
            where: { id },
        });
    
        if (!existingTask) {
            throw new Error('Task not found');
        }

        const task = await this.prisma.task.update({
            where: {
                id
            },
            data: {
                title: title ?? existingTask.title,
                description: description ?? existingTask.description
            }
        })

        return task;
    }
}