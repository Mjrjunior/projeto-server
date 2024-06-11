import { Router } from 'express';
import { CreateTaskController } from '../controllers/createTaskController';
import { GetTasksController } from '../controllers/getTasksController';
import { GetTaskController } from '../controllers/getTaskController';
import { UpdateTaskController } from '../controllers/updateTaskController';
import { DeleteTaskController } from '../controllers/deleteTaskController';
import { CreateAgendaController } from '../controllers/agenda/createAgendaController';
import { GetAgendaController } from '../controllers/agenda/getAgendaController';
import { UpdateAgendaController } from '../controllers/agenda/updateAgendaController';
import { DeleteAgendaController } from '../controllers/agenda/deleteAgendaController';

export const routes = Router();

routes.get('/tasks', new GetTasksController().handle)

routes.get('/task/:id', new GetTaskController().handle)

routes.post('/tasks', new CreateTaskController().handle)

routes.put('/tasks/:id', new UpdateTaskController().handle)

routes.delete('/tasks/:id', new DeleteTaskController().handle)

routes.post('/agenda', new CreateAgendaController().handle)

routes.get('/agenda', new GetAgendaController().handle)

routes.put('/agenda/:id', new UpdateAgendaController().handle)

routes.delete('/agenda/:id', new DeleteAgendaController().handle)