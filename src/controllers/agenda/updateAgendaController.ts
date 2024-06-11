import { Request, Response } from "express";
import { UpdateAgendaService } from "../../services/agenda/updateAgendaService";
import { prisma } from "../../lib/prisma";


export class UpdateAgendaController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const data = request.body;

        const updatedAgendaService = new UpdateAgendaService(prisma);

        const agenda = await updatedAgendaService.execute({id, ...data});

        // if(!title || !description) {
        //     return response.status(400).json({ error: "Missing title or description" });
        // }
        return response.status(200).json(agenda);
    }
}