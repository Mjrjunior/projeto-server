import { Agenda, PrismaClient} from "@prisma/client";

export class CreateAgendaService {
    static execute: any;
    constructor(private prisma: PrismaClient) {}
    
    async execute({name,email, phone, city, cep, district, numberHouse, state, street, complement}: AgendaType): Promise<Agenda> {
        const agenda = await this.prisma.agenda.create({
            data: {
                name,
                email,
                phone,
                city,
                cep,
                district,
                numberHouse,
                state,
                street,
                complement

            }
        });

        return agenda ;
    }
}