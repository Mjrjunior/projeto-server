import { PrismaClient, Agenda } from "@prisma/client";


export class GetAgendaService {
    constructor(private prisma: PrismaClient) {}

    async execute(): Promise<Agenda[]> {
        const agenda = await this.prisma.agenda.findMany();
        return agenda;
    }
}