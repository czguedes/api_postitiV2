import { NextFunction, Request, Response } from "express";

export function validarIdUsuario(req: Request, res: Response, next: NextFunction) {
    const { criadoPor } = req.body

    if (!criadoPor) {
        return res.status(401).json({ mensagem: 'Necessário informar o id do usuário logado/emissor do recado.' })
    }

    if (typeof criadoPor !== "string" || criadoPor === '') {
        return res.status(401).json({ mensagem: 'O id do usuario não corresponde ao esperado.' })
    }

    next()
}