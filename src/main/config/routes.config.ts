import { Express, Request, Response } from 'express';
import routerRecados from '../../app/features/Recados/recados.routes';
import routerUsuarios from '../../app/features/Usuarios/usuarios.routes';

export function rotasApp(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: 'Postiti API funcionando!' });
    });

    app.use('/usuarios', routerUsuarios);
    app.use('/recados', routerRecados);
}