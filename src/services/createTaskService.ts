import { PrismaClient, Task } from "@prisma/client";

export class CreateTaskService {
    constructor(private prisma: PrismaClient) {}
    
    async execute({title, description}: {title: string, description: string}): Promise<Task> {
        const task = await this.prisma.task.create({
            data: {
                title,
                description
            }
        });

        return task;
    }
}