import { NextFunction, Request, Response } from "express";

export function validarIdRecado(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id

    if (!id) {
        return res.status(401).json({ mensagem: 'Necessário informar o id do usuário logado/emissor do recado.' })
    }

    if (typeof id !== "string" || id === '') {
        return res.status(401).json({ mensagem: 'O id do usuario não corresponde ao esperado.' })
    }

    next()
}