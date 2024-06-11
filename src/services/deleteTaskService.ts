import { PrismaClient } from "@prisma/client";


export class DeleteTaskService {
    constructor(private prisma: PrismaClient) {}

    async execute({id}: {id: string}) {
        const task = await this.prisma.task.delete({
            where: {
                id,
            }
        })

        return task;
    }
}