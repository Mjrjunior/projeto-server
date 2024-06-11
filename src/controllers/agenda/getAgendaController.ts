import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { GetAgendaService } from '../../services/agenda/getAgendaService';




export class GetAgendaController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAgendaService = new GetAgendaService(prisma);

        const agenda = await getAgendaService.execute();

        return response.json(agenda);
    }
}