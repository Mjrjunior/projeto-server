import { PrismaClient, Task } from "@prisma/client";


export class GetTasksService {
    constructor(private prisma: PrismaClient) {}

    async execute(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany();
        return tasks;
    }
}