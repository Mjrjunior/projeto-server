import { PrismaClient } from "@prisma/client";


export class UpdateAgendaService {
    constructor(private prisma: PrismaClient) {}

    async execute({id, name,email, phone, city, cep, district, numberHouse, state, street, complement}: AgendaType) {
        const existingAgenda = await this.prisma.agenda.findUnique({
            where: { id },
        });
    
        if (!existingAgenda) {
            throw new Error('Task not found');
        }

        const agenda = await this.prisma.agenda.update({
            where: {
                id
            },
            data: {
                name: name ?? existingAgenda.name,
                email: email ?? existingAgenda.email,
                phone: phone ?? existingAgenda.phone,
                city: city ?? existingAgenda.city,
                cep: cep ?? existingAgenda.cep,
                district: district ?? existingAgenda.district,
                numberHouse: numberHouse ?? existingAgenda.numberHouse,
                state: state ?? existingAgenda.state,
                street: street ?? existingAgenda.street,
                complement: complement ?? existingAgenda.complement
            }
        })

        return agenda;
    }
}