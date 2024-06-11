import { PrismaClient, Task } from "@prisma/client";


export class GetTaskService {
    constructor(private prisma: PrismaClient) {}

    async execute({id}: {id: string}): Promise<Task | null > {
        const task = await this.prisma.task.findUnique({
            where: {
                id
            }
        })
        return task;
    }
}