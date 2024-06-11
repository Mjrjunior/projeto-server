import { Request, Response } from 'express';
import { DeleteAgendaService } from '../../services/agenda/deleteAgendaService';
import { prisma } from '../../lib/prisma';


export class DeleteAgendaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const deleteAgendaService = new DeleteAgendaService(prisma);
        const task = await deleteAgendaService.execute({ id });

        if(task instanceof Error) {
            return response.status(400).json({ error: task.message });
        }
        return response.status(204).send();
    }
}
