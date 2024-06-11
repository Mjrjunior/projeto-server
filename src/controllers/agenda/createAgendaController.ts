import { Request, Response } from 'express';
import { CreateAgendaService } from '../../services/agenda/createAgendaService';
import { prisma } from '../../lib/prisma';

export class CreateAgendaController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createAgendaService = new CreateAgendaService(prisma);

        const agenda = await createAgendaService.execute(data);

        if(agenda instanceof Error) {
            return response.status(400).json({ error: agenda.message });
        }

        return response.status(201).json(agenda);
    }
}