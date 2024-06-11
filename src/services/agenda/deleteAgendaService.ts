import { PrismaClient } from "@prisma/client";


export class DeleteAgendaService {
    constructor(private prisma: PrismaClient) {}

    async execute({id}: {id: string}) {
        const agenda = await this.prisma.agenda.delete({
            where: {
                id,
            }
        })

        return agenda;
    }
}